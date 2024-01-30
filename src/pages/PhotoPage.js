import React from 'react';
import chbroc from '../images/chickenBroccoliLunch.jpg'
import chmixvege from '../images/chickenMixedVegetablesLunch.jpg'
import chwingshrfrr from '../images/chickenWingShrimpFriedRice.jpg'
import chlom from '../images/chiLoMeinLunch.jpg'
import frdumpling from '../images/friedDumpling.jpg'
import frwonton from '../images/friedWonton.jpg'
import gtch from '../images/generalTsos.jpg'
import gtchlom from '../images/generalTsosLoMein.jpg'
import gtchlunch from '../images/generalTsosLunch.jpg'
import gttofu from '../images/generalTsosTofu.jpg'
import housemaifun from '../images/houseMaiFun.jpg'
import mapoTofu from '../images/mapoTofu.jpg'
import mongobeef from '../images/mongolianBeefCombo.jpg'
import shrmaifun from '../images/shrimpMaiFun.jpg'
import singmaifun from '../images/singaporeMaiFun.jpg'
import steamdumpling from '../images/steamedDumpling.jpg'
import terich from '../images/teriyakiBourbonChicken.jpg'
import { GiBroccoli } from "react-icons/gi"

function PhotoPage() {
    return (
        <>
            <img src={chbroc} alt="Chicken Broccoli Lunch" />
            <figcaption><b>Chicken Broccoli Lunch</b></figcaption>
            <img src={chmixvege} alt="Chicken Mixed Vegetable Lunch" />
            <figcaption><b>Chicken Mixed Vegetable Lunch</b></figcaption>
            <img src={chwingshrfrr} alt="Chicken Wing Shrimp Fried Rice" />
            <figcaption><b>Chicken Wing Shrimp Fried Rice</b></figcaption>
            <img src={chlom} alt="Chicken Lo Mein Lunch" />
            <figcaption><b>Chicken Lo Mein Lunch</b></figcaption>
            <img src={frdumpling} alt="Fried Dumpling" />
            <figcaption><b>Fried Dumpling</b></figcaption>
            <img src={frwonton} alt="Fried Wonton" />
            <figcaption><b>Fried Wonton</b></figcaption>
            <img src={gtch} alt="General Tso's Chicken" />
            <figcaption><b>General Tso's Chicken</b></figcaption>
            <img src={gtchlom} alt="General Tso's Chicken Combo" />
            <figcaption><b>General Tso's Chicken Combo with Plain Lo Mein</b></figcaption>
            <img src={gtchlunch} alt="General Tso's Chicken Lunch" />
            <figcaption><b>General Tso's Chicken Lunch</b></figcaption>
            <img src={gttofu} alt="General Tso's Tofu" />
            <figcaption><b>General Tso's Tofu</b></figcaption>
            <img src={housemaifun} alt="House Special Mai Fun" />
            <figcaption><b>House Special Mai Fun</b></figcaption>
            <img src={mapoTofu} alt="Mapo Tofu" />
            <figcaption><b>Mapo Tofu</b></figcaption>
            <img src={mongobeef} alt="Mongolian Beef Combo" />
            <figcaption><b>Mongolian Beef Combo</b></figcaption>
            <img src={shrmaifun} alt="Shrimp Mai Fun" />
            <figcaption><b>Shrimp Mai Fun</b></figcaption>
            <img src={singmaifun} alt="Singapore Mai Fun" />
            <figcaption><b>Singapore Mai Fun</b></figcaption>
            <img src={steamdumpling} alt="Steamed Dumpling" />
            <figcaption><b>Steamed Dumpling</b></figcaption>
            <img src={terich} alt="Teriyaki Chicken" />
            <figcaption><b>Teriyaki Chicken</b></figcaption>
            <a href="https://www.youtube.com/watch?v=DaluZ9lba88"><GiBroccoli /> Broccoli Meme</a>
        </>
    )
}

export default PhotoPage;