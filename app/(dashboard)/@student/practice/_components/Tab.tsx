import React from "react";
import Link from "next/link";

interface PracticeTabProps {
  type: string;
}

const PracticeTab = ({ type }: PracticeTabProps) => {
  const tabs = [
    { label: "Tất cả" },
    { label: "Luyện từ vựng", value: "vocabulary" },
    { label: "Luyện ngữ pháp", value: "grammar" },
    { label: "Luyện đọc hiểu", value: "reading" },
    { label: "Luyện nghe", value: "listening" },
    { label: "Luyện viết", value: "writing" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => (
        <Link
          key={tab.value}
          href={tab.value ? `/practice?type=${tab.value}` : "/practice"}
          className={`btn ${type === tab.value ? "btn-primary" : "btn-ghost"}`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default PracticeTab;
