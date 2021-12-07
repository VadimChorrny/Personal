import React from 'react'
import '../../Styles/Crypto.scss'

export default function Crypto() {
    return (
            <div className="nfc-containeer">
            <div className="block block-name">
                <h1>NFT</h1>
            </div>
            <div className="block block-work-list">
                <div className="token" id="first">
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <button><a href="#" target="_blank">View</a></button>
                </div>
                <div className="token" id="second">
                    <h2>Title</h2>
                    <h3>Subtitle</h3>
                    <button><a href="#" target="_blank">View</a></button>
                </div>
                <div className="token" id="third">
                    <h2>Old Pixel Cars</h2>
                    <h3>Personal collection</h3>
                    <button><a target="_blank" href="https://rarible.com/token/0xF6793dA657495ffeFF9Ee6350824910Abc21356C:11512981452410518653097713587370283918992366549962068815297995088797544480769?tab=details">View</a></button>
                </div>
            </div>
        </div>
    )
}
