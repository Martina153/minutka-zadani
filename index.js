console.log('funguju!');



//Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. 
//Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.



let sec = Number(prompt('Zadej pocet sekund: '))*1000
const ring = () => {
    const budik = document.querySelector('.alarm')
    budik.classList.add('alarm--ring')
}

const timeoutId = setTimeout(ring, sec)


const play = () => {
    const audio = document.querySelector('.audio')
    audio.play()

}

const timeoutId2 = setTimeout(play, sec)
//Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play.
// Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. 
//Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
//Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.


document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.stop-button');
    button.addEventListener('click', () => {
    clearTimeout(timeoutId);
    clearTimeout(timeoutId2);
    console.log('Odpocet byl zrušen.')
    });
  });