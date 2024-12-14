import React from "react";
import {
  BookOpen,
  Headphones,
  Image,
  Pencil,
  Book,
  Target,
  MessageSquare,
  Mic,
  FileText,
  Puzzle,
  Brain,
  Lightbulb,
} from "lucide-react";
import PracticeTab from "./_components/Tab";
import Link from "next/link";
interface PracticePageProps {
  searchParams: Promise<{
    type: string;
  }>;
}

const PracticePage = async ({ searchParams }: PracticePageProps) => {
  const { type } = await searchParams;

  const practiceCards = [
    {
      id: 1,
      title: "Read and Select",
      description: "Luyện đọc và chọn đáp án đúng",
      progress: 33,
      icon: <Target size={48} className="text-primary" />,
      type: "reading",
      totalExercises: 24,
      completedExercises: 8,
    },
    {
      id: 2,
      title: "Fill in the Blanks",
      description: "Điền từ vào chỗ trống",
      progress: 25,
      icon: <Pencil size={48} className="text-primary" />,
      type: "grammar",
      totalExercises: 32,
      completedExercises: 8,
    },
    {
      id: 3,
      title: "Read and Complete",
      description: "Đọc và hoàn thành đoạn văn",
      progress: 50,
      icon: <Book size={48} className="text-primary" />,
      type: "reading",
      totalExercises: 20,
      completedExercises: 10,
    },
    {
      id: 4,
      title: "Listen and Type",
      description: "Nghe và gõ lại nội dung",
      progress: 40,
      icon: <Headphones size={48} className="text-primary" />,
      type: "listening",
      totalExercises: 30,
      completedExercises: 12,
    },
    {
      id: 5,
      title: "Write About the Photo",
      description: "Viết về bức ảnh",
      progress: 25,
      icon: <Image size={48} className="text-primary" />,
      type: "writing",
      totalExercises: 16,
      completedExercises: 4,
    },
    {
      id: 6,
      title: "Interactive Reading",
      description: "Đọc hiểu tương tác",
      progress: 33,
      icon: <BookOpen size={48} className="text-primary" />,
      type: "reading",
      totalExercises: 24,
      completedExercises: 8,
    },
    {
      id: 7,
      title: "Conversation Practice",
      description: "Luyện tập hội thoại",
      progress: 60,
      icon: <MessageSquare size={48} className="text-primary" />,
      type: "speaking",
      totalExercises: 20,
      completedExercises: 12,
    },
    {
      id: 8,
      title: "Pronunciation Drill",
      description: "Luyện phát âm chuẩn",
      progress: 45,
      icon: <Mic size={48} className="text-primary" />,
      type: "speaking",
      totalExercises: 40,
      completedExercises: 18,
    },
    {
      id: 9,
      title: "Essay Writing",
      description: "Viết luận theo chủ đề",
      progress: 15,
      icon: <FileText size={48} className="text-primary" />,
      type: "writing",
      totalExercises: 20,
      completedExercises: 3,
    },
    {
      id: 10,
      title: "Word Puzzles",
      description: "Giải ô chữ tiếng Anh",
      progress: 70,
      icon: <Puzzle size={48} className="text-primary" />,
      type: "vocabulary",
      totalExercises: 30,
      completedExercises: 21,
    },
    {
      id: 11,
      title: "Grammar Challenge",
      description: "Thử thách ngữ pháp",
      progress: 55,
      icon: <Brain size={48} className="text-primary" />,
      type: "grammar",
      totalExercises: 40,
      completedExercises: 22,
    },
    {
      id: 12,
      title: "Vocabulary Builder",
      description: "Xây dựng vốn từ vựng",
      progress: 65,
      icon: <Lightbulb size={48} className="text-primary" />,
      type: "vocabulary",
      totalExercises: 50,
      completedExercises: 32,
    },
  ];

  const filteredCards = type
    ? practiceCards.filter((card) => card.type === type)
    : practiceCards;

  return (
    <div className="container mx-auto px-6">
      <div className="mb-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">Luyện tập nhanh</h2>
          <p className="text-base-content/70 text-lg max-w-2xl">
            Cải thiện các kỹ năng nhất định bằng cách luyện tập riêng các câu
            hỏi theo từng chủ đề
          </p>
        </div>

        {/* Tab buttons */}
        <PracticeTab type={type} />

        {/* Practice cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card) => (
            <Link
              key={card.id}
              href={`/practice/${card.type}`}
              className="card card-side card-bordered card-compact bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <figure className="w-48">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  {card.icon}
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{card.title}</h3>
                <p className="text-base-content/70">{card.description}</p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tiến độ</span>
                    <span className="text-primary">{card.progress}%</span>
                  </div>
                  <div className="w-full bg-base-200 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-base-content/70 mt-2">
                    Hoàn thành {card.completedExercises}/{card.totalExercises}{" "}
                    bài tập
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
