import React, { useState } from "react";
import "../../Styles/Contact.scss";

const Contact = () => {
    const [copySuccess, setCopySuccess] = useState("");

    const copyToClipBoard = async (copyMe) => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess("Copied!");
        } catch (err) {
            setCopySuccess("Failed to copy!");
        }
    };

    return (
        <div className="contact-containeer">
            <div className="block block-name">
                <h1>Contact</h1>
            </div>
            <div className="block block-contact-list">
                <div className="contact">
                    <button
                        onClick={() => copyToClipBoard("chorrny228@gmail.com")}
                    >
                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Gmail</a>
                    </button>
                </div>
                <div className="contact">
                    <button
                        onClick={() =>
                            copyToClipBoard("https://github.com/VadimChorrny")
                        }
                    >
                        <a target="_blank" href="https://github.com/VadimChorrny">GitHub</a>
                    </button>
                </div>
                <div className="contact">
                    <button
                        onClick={() =>
                            copyToClipBoard(
                                "https://www.linkedin.com/in/vadim-chorniy-3a066a1b7/"
                            )
                        }
                    >
                        <a target="_blank" href="https://www.linkedin.com/in/vadim-chorniy-3a066a1b7/">
                            Linkedin
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
