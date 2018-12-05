import React from "react"

const CardDev = () => {
    return (
        <section id="cardDev">
            <div className="div-one">
                <img src="/images/icons/man.svg" width="30%" alt="screen"/>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button type="button" class="btn btn-primary">Signup</button>
                </div>
            </div>
            <div className="div-two">
                <img src="/images/icons/responsive.svg" width="30%" alt="screen"/>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button type="button" class="btn btn-success">See some projects</button>
                </div>
            </div>
            <div className="div-three">
                <img src="/images/icons/handshake.svg" width="30%" alt="screen"/>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button type="button" class="btn btn-danger">Não sei</button>
                </div>
            </div>
        </section>
    )
}

export default CardDev;