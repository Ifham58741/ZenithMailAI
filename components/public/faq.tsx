// FAQ.tsx
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is ZenithMailAI?",
      answer:
        "ZenithMailAI is a revolutionary SaaS AI app designed to automate your email management process. It integrates with your Gmail inbox using advanced Large Language Model technology to intercept, process, and categorize your emails with precision.",
    },
    {
      question: "How does ZenithMailAI categorize emails?",
      answer:
        "Our application uses advanced AI to intelligently tag and classify emails. You can create custom labels, and the app will automatically label emails based on your preferences, making email management effortless.",
    },
    {
      question: "Can ZenithMailAI handle multiple inboxes?",
      answer:
        "Yes, ZenithMailAI supports multiple inboxes, allowing you to manage all your email accounts from one platform seamlessly.",
    },
    {
      question: "What technology powers ZenithMailAI?",
      answer:
        "ZenithMailAI is powered by Gemini, an advanced Large Language Model (LLM) technology that enhances email categorization, tagging, and automated responses.",
    },
    {
      question: "Does ZenithMailAI provide email writing suggestions?",
      answer:
        "Yes, our app includes AI-based email writing suggestions and autocompletion to help you draft emails more efficiently.",
    },
    {
      question: "How do I gain insights into my email patterns?",
      answer:
        "ZenithMailAI features an insightful dashboard and detailed charts that provide valuable insights into your email patterns, helping you stay organized and informed.",
    },
    {
      question: "Can I automate responses using ZenithMailAI?",
      answer:
        "Yes, ZenithMailAI includes features for automated responses, helping you manage your communication more efficiently.",
    },
    {
      question: "Is my data secure with ZenithMailAI?",
      answer:
        "We prioritize your data security. ZenithMailAI uses advanced encryption and security protocols to ensure that your email data is protected at all times.",
    },
    {
      question: "Can I customize the labels used for categorization?",
      answer:
        "Absolutely! You can create and customize labels to fit your specific needs, and ZenithMailAI will automatically categorize your emails accordingly.",
    },
    {
      question: "How can I get started with ZenithMailAI?",
      answer:
        "To get started, simply sign up on our website and connect your Gmail inbox. The setup process is quick, and you will start experiencing the benefits of automated email management immediately.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
