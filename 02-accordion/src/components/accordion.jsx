import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../index.css";

function Accordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="accordion">
            {
                items && items.length ? (
                    items.map((item, i) => {
                        return <div key={i} className="accordion-item">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="accordion-title">{item.title}
                                {
                                    openIndex === i ? <FaChevronUp className="right" /> : <FaChevronDown className="right" />
                                }
                            </button>
                            {
                                openIndex === i && <div className="accordion-content">{item.content}</div>
                            }
                        </div>
                    })
                ) : <p>No items available</p>
            }
        </div>
    );
}

export default Accordion;