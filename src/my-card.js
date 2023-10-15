import { LitElement, html, css } from 'lit';


class MyCard extends LitElement {
  static properties = {
    image: { type: String },
    alt: { type: String },
    title: { type: String },
    titleTwo: { type: String },
    description: { type: String },
    detailsBtnText: { type: String },
  }


  static styles = css`
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .card-content {
      text-align: center;
      color: white;
      display: block;
      flex-direction: column;
      align-content: center;
      font-family: "Optima"
    }
    .card-container {
      background-color: #3e1a79;
      width: 55%;
      margin: 50px;
      padding: 15px;
      border-radius: 15px;
    }
    .card-content img {
      max-width: 50%;
      border-radius: 25px;
    }
    #cDescription {
      color: white;
      font-size: 18px;
      font-family: "Optima"
    }


  #details-button {
    display: flex;
    border-radius: 4px;
    background-color: whitesmoke;
    color: black;
    height: 22px;
    width: 30%;
    align-content: center;
    justify-content: center;
    margin-left: 25px;
    margin-top: 50px;
    margin-bottom: 10px;
    font-family: "Optima"
  }
  `;


  firstUpdated() {
    const colorBtn = this.shadowRoot.querySelector('#colorBtn');
    const titleBtn = this.shadowRoot.querySelector('#titleBtn');
    const deleteBtn = this.shadowRoot.querySelector('#deleteBtn');
    const cardTitle = this.shadowRoot.querySelector('#cardTitle');

    const cardDescription = this.shadowRoot.querySelector('#cDescription');
    const toggleDescription = this.shadowRoot.querySelector('#details-button');
    const btn = this.shadowRoot.querySelector('#btn');
    const card = this.shadowRoot.querySelector('.card-container');
    
    const clone = card.cloneNode(true);
    const cards = this.shadowRoot.querySelector('.cards');
    const details = this.shadowRoot.querySelector('details');
    const summary = this.shadowRoot.querySelector('summary');

    const cardContent = this.shadowRoot.querySelector('.card-content');
    const cardImage = this.shadowRoot.querySelector('img');
    const cardContatainer = this.shadowRoot.querySelector('.card-container');
    const cardClone = this.shadowRoot.querySelector('.card-container');
    const cardsClone2 = this.shadowRoot.querySelector('.card-container');

    toggleDescription.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });

    cardContent.addEventListener('click', () => {
      cardImage.classList.toggle('hidden');
    });

    summary.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });

  }

  changeTitle() {
    const cardTitle = this.shadowRoot.querySelector('#cardTitle');
    if(cardTitle.innerText = 'Penn State Lax?')
    {
      cardTitle.innerText == 'Penn State Lacrosse!';
    }
    else
    {
      cardTitle.innerText = 'Penn State Lax?';
    }
  }

  deleteCard () {
    const cards = this.shadowRoot.querySelector('.cards');
    const cardCount = cards.children.length;
    if(cardCount > 1)
    {
      cards.removeChild(cards.lastChild);
    }
  }

  randomColorGenerator() {
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cardContainer.style.background = '#' + randomColor;
    return randomColor;
  }

  cloneCard(e) {
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    this.shadowRoot.querySelector('.cards').appendChild(clone);
  }

  render() {
    return html`  
    <button id="btn" @click="${this.cloneCard.bind(this)}">Clone</button>
    <button id="colorBtn" @click="${this.randomColorGenerator.bind(this)}">Change Color</button>
    <button id="titleBtn" @click="${this.changeTitle.bind(this)}">Change Title</button>
    <button id="deleteBtn" @click="${this.deleteCard.bind(this)}">Delete Card</button>
    
    <div class="cards">
      <div class="card-content">
        <div class="card-content">
          <h2 id="cardTitle">${this.title}
          </h2>
          <p>${this.titleTwo}
          </p>
          <img src= ${"https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/gopsusports.com/images/2019/4/12/DSC_3685.jpg"} alt= ${this.alt}>
        </div>
        <details>
        <summary id = "details-button" > ${this.detailsBtnText} </summary>
        <p id = "cDescription"><slot></slot>${this.description} </p>

        </details>
      </div>
    </div>
    `;
  }
}

customElements.define('my-card', MyCard);