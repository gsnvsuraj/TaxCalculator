import React, { useState } from 'react';
import faqData from '../data/FAQ.json';
import '../styles/FAQPage.css';

const FAQPage = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>

            {faqData.faq.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
                        {faq.question}
                    </h3>
                    {expandedIndex === index && <p className="faq-answer">{faq.answer}</p>}
                </div>
            ))}

        </div>
    );
};

export default FAQPage;