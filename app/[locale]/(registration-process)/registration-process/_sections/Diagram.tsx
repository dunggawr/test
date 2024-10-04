import { Section } from '@/app/[locale]/type'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import React from 'react'

export const Diagram: React.FC<{ data: Section }> = ({data}) => {
  const steps = [
    { id: 1, title: 'Bước 1', description: 'Tìm hiểu thông tin', icon: '🔍' },
    { id: 2, title: 'Bước 2', description: 'Đăng ký làm bài Test', icon: '📝' },
    { id: 3, title: 'Bước 3', description: 'Chấm điểm và đánh giá', icon: '📄' },
    { id: 4, title: 'Bước 4', description: 'Học thử', icon: '📘' },
    { id: 5, title: 'Bước 5', description: 'Tư vấn lộ trình học', icon: '💬' },
    { id: 6, title: 'Bước 6', description: 'Học chính thức', icon: '🎓' },
  ];
  return (
    <div className={"container"}>
      {steps.map((step, index) => (
        <div key={step.id} className={"stepContainer"}>
          <div className={"step"}>
            <div className={"icon"}>{step.icon}</div>
            <h2 className={"title"}>{step.title}</h2>
            <p>{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <svg className={"curvedArrow"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50">
              <path
                d="M0 25 Q 50 0 100 25"
                fill="transparent"
                stroke="#ddd"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <polygon points="95,20 100,25 95,30" fill="#ddd" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
