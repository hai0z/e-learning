'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ArrowLeft, Plus, X } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
});
import 'react-quill-new/dist/quill.snow.css';

type QuestionType = 'multiple_choice' | 'essay';

interface Question {
  id: string;
  type: QuestionType;
  content: string;
  options?: string[];
  correctOption?: number | null;
}

export default function CreateExercisePage() {
  const params = useParams();
  const [step, setStep] = useState<'name' | 'type' | 'questions'>('name');
  const [exerciseName, setExerciseName] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedType, setSelectedType] = useState<QuestionType | null>(null);

  const handleCreateQuestion = () => {
    if (!selectedType) return;
    
    const newQuestion: Question = {
      id: Date.now().toString(),
      type: selectedType,
      content: '',
      options: selectedType === 'multiple_choice' ? ['', ''] : undefined,
      correctOption: selectedType === 'multiple_choice' ? null : undefined
    };
    setCurrentQuestion(newQuestion);
    setStep('questions');
    setIsEditing(false);
  };

  const handleSaveQuestion = () => {
    if (!currentQuestion) return;

    if (!currentQuestion.content.trim()) {
      alert('Vui lòng nhập nội dung câu hỏi');
      return;
    }

    if (currentQuestion.type === 'multiple_choice') {
      if (currentQuestion.options?.some(opt => !opt.trim())) {
        alert('Vui lòng điền đầy đủ nội dung các lựa chọn');
        return;
      }
      if (currentQuestion.correctOption === null) {
        alert('Vui lòng chọn đáp án đúng');
        return;
      }
    }

    if (isEditing) {
      setQuestions(questions.map(q => 
        q.id === currentQuestion.id ? currentQuestion : q
      ));
    } else {
      setQuestions([...questions, currentQuestion]);
    }
    setCurrentQuestion(null);
    setIsEditing(false);
    setStep('type');
  };

  const handleEditQuestion = (question: Question) => {
    setCurrentQuestion({...question});
    setIsEditing(true);
    setStep('questions');
  };

  const handleDeleteQuestion = (questionId: string) => {
    setQuestions(questions.filter(q => q.id !== questionId));
  };

  const handleOptionChange = (index: number, value: string) => {
    if (!currentQuestion || !currentQuestion.options) return;
    
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const handleAddOption = () => {
    if (!currentQuestion || !currentQuestion.options) return;
    
    setCurrentQuestion({
      ...currentQuestion,
      options: [...currentQuestion.options, '']
    });
  };

  const handleRemoveOption = (index: number) => {
    if (!currentQuestion || !currentQuestion.options) return;
    
    const newOptions = currentQuestion.options.filter((_, i) => i !== index);
    const newCorrectOption = currentQuestion.correctOption === index 
      ? null 
      : currentQuestion.correctOption! > index 
        ? currentQuestion.correctOption! - 1 
        : currentQuestion.correctOption;

    setCurrentQuestion({
      ...currentQuestion,
      options: newOptions,
      correctOption: newCorrectOption
    });
  };

  return (
    <div className="container mx-auto max-w-5xl p-4 mt-16">
      <div className="mb-8">
        <Link
          href={`/classes/${params.id}/chapter/${params.chapterId}`}
          className="btn btn-ghost gap-2 pl-0 mb-4"
        >
          <ArrowLeft size={20} />
          Quay lại
        </Link>
        <h1 className="text-2xl font-bold">Tạo bài tập mới</h1>
      </div>

      {step === 'name' && (
        <div className="card bg-base-100 border p-6">
          <h3 className="text-lg font-medium mb-4">Tên bài tập</h3>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Nhập tên bài tập"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
          <div className="flex justify-end mt-4">
            <button
              className="btn btn-primary"
              disabled={!exerciseName.trim()}
              onClick={() => setStep('type')}
            >
              Tiếp tục
            </button>
          </div>
        </div>
      )}

      {step === 'type' && !currentQuestion && (
        <>
          {!selectedType ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="card bg-base-100 border hover:border-primary cursor-pointer transition-all p-6"
                onClick={() => {
                  setSelectedType('multiple_choice');
                  handleCreateQuestion();
                }}
              >
                <h3 className="text-xl font-semibold mb-2">Trắc nghiệm</h3>
                <p className="text-base-content/70">
                  Tạo câu hỏi trắc nghiệm với nhiều lựa chọn
                </p>
              </div>
              <div
                className="card bg-base-100 border hover:border-primary cursor-pointer transition-all p-6"
                onClick={() => {
                  setSelectedType('essay');
                  handleCreateQuestion();
                }}
              >
                <h3 className="text-xl font-semibold mb-2">Tự luận</h3>
                <p className="text-base-content/70">
                  Tạo câu hỏi tự luận cho học viên trả lời
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-medium">Danh sách câu hỏi</h3>
                  <span className="badge badge-outline">
                    {selectedType === 'multiple_choice' ? 'Trắc nghiệm' : 'Tự luận'}
                  </span>
                </div>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={handleCreateQuestion}
                >
                  Thêm câu hỏi
                </button>
              </div>

              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={question.id} className="card bg-base-100 border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="font-medium">Câu {index + 1}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="btn btn-ghost btn-sm"
                          onClick={() => handleEditQuestion(question)}
                        >
                          Sửa
                        </button>
                        <button
                          className="btn btn-ghost btn-sm text-error"
                          onClick={() => handleDeleteQuestion(question.id)}
                        >
                          Xoá
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {step === 'questions' && currentQuestion && (
        <div className="space-y-6">
          <div className="card bg-base-100 border p-6">
            <h3 className="text-lg font-medium mb-4">Nội dung câu hỏi</h3>
            <ReactQuill
              theme="snow"
              value={currentQuestion.content}
              onChange={(content) => setCurrentQuestion({ ...currentQuestion, content })}
              className="h-40 mb-12"
            />
          </div>

          {currentQuestion.type === 'multiple_choice' && (
            <div className="card bg-base-100 border p-6">
              <h3 className="text-lg font-medium mb-4">Các lựa chọn</h3>
              <div className="space-y-4">
                {currentQuestion.options?.map((option, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      name="correct-answer"
                      className="checkbox checkbox-primary"
                      checked={currentQuestion.correctOption === index}
                      onChange={() => setCurrentQuestion({ ...currentQuestion, correctOption: index })}
                    />
                    <input
                      type="text"
                      className="input input-bordered flex-1"
                      placeholder={`Lựa chọn ${index + 1}`}
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                    />
                    {currentQuestion.options!.length > 2 && (
                      <button
                        className="btn btn-ghost btn-sm text-error"
                        onClick={() => handleRemoveOption(index)}
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                className="btn btn-ghost btn-sm mt-4"
                onClick={handleAddOption}
              >
                <Plus size={16} />
                Thêm lựa chọn
              </button>
            </div>
          )}

          <div className="flex justify-end gap-2">
            <button
              className="btn btn-ghost"
              onClick={() => {
                setCurrentQuestion(null);
                setStep('type');
              }}
            >
              Huỷ
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleSaveQuestion}
            >
              {isEditing ? 'Cập nhật' : 'Thêm'} câu hỏi
            </button>
          </div>
        </div>
      )}

      {questions.length > 0 && step === 'type' && (
        <div className="flex justify-end gap-2 mt-8">
          <button className="btn btn-primary">
            Hoàn thành
          </button>
        </div>
      )}
    </div>
  );
}