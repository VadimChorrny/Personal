import React, { useState } from "react";
import "../../Styles/Contact.scss";
import BuyMeACoffe from "../BuyMeACoffe.js";

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
                        <a
                            href="https://mail.google.com/mail/u/0/#inbox"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Gmail
                        </a>
                    </button>
                </div>
                <div className="contact">
                    <button
                        onClick={() =>
                            copyToClipBoard("https://github.com/VadimChorrny")
                        }
                    >
                        <a
                            target="_blank"
                            href="https://github.com/VadimChorrny"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
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
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/vadim-chorniy-3a066a1b7/"
                            rel="noreferrer"
                        >
                            Linkedin
                        </a>
                    </button>
                </div>
                <div className="contact">
                    <button>
                        <a
                            target="_blank"
                            href="https://kuna.io?r=kunaid-xbk8lincwa37"
                            rel="noreferrer"
                        >
                            Crypto Referal Link
                        </a>
                    </button>
                </div>
                <div className="contact">
                    <button onClick={() => copyToClipBoard("@whitewarrior")}>
                        <a
                            target="_blank"
                            href="https://dev.to/whitewarrior"
                            rel="noreferrer"
                        >
                            DEV COMMUNITY
                        </a>
                    </button>
                </div>
                <div className="contact">
                    <button onClick={() => copyToClipBoard("я мавпа рижа")}>
                        <a
                            target="_blank"
                            href="https://freelancehunt.com/freelancer/chorrny.html"
                            rel="noreferrer"
                        >
                            FREELANCE
                        </a>
                    </button>
                </div>

                <BuyMeACoffe />
            </div>
        </div>
    );
};

export default Contact;
