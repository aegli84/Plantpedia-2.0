import styled from 'styled-components';
import aloZebrina1 from "./Alocasia zebrina/aloZebrina1.jpeg";
import aloZebrina2 from "./Alocasia zebrina/aloZebrina2.jpeg";
import aloZebrina3 from "./Alocasia zebrina/aloZebrina3.jpeg";
import calatheaOrbifolia1 from "./Calathea Orbifolia/calatheaOrbifolia1.jpeg";
import calatheaOrbifolia2 from "./Calathea Orbifolia/calatheaOrbifolia2.jpeg";
import calatheaOrbifolia3 from "./Calathea Orbifolia/calatheaOrbifolia3.jpg";
import calatheaZebrina1 from "./Calathea Zebrina/calatheaZebrina1.jpeg";
import calatheaZebrina2 from "./Calathea Zebrina/calatheaZebrina2.jpeg";
import calatheaZebrina3 from "./Calathea Zebrina/calatheaZebrina3.jpeg";
import monstera1 from "./Monstera Deliciosa/monstera1.jpeg";
import monstera2 from "./Monstera Deliciosa/monstera2.jpeg";
import monstera3 from "./Monstera Deliciosa/monstera3.jpg";
import zzPlant1 from "./Zamioculcas (plant ZZ)/zzPlant1.jpeg";
import zzPlant2 from "./Zamioculcas (plant ZZ)/zzPlant2.jpeg";
import zzPlant3 from "./Zamioculcas (plant ZZ)/zzPlant3.jpeg";
import dieffMaroba1 from "./Dieffenbachia _Maroba_/diffMaroba1.jpeg";
import dieffMaroba2 from "./Dieffenbachia _Maroba_/diffMaroba2.jpeg";
import dieffMaroba3 from "./Dieffenbachia _Maroba_/diffMaroba3.jpeg";
import ficusElastica1 from "./Ficus elastica _Robusta_ or _Abidjan_/ficusElastica1.jpeg";
import ficusElastica2 from "./Ficus elastica _Robusta_ or _Abidjan_/ficusElastica2.jpeg";
import ficusElastica3 from "./Ficus elastica _Robusta_ or _Abidjan_/ficusElastica3.jpeg";
import ficusLyrata1 from "./Ficus lyrata/ficusLyrata1.jpeg";
import ficusLyrata2 from "./Ficus lyrata/ficusLyrata2.jpeg";
import ficusLyrata3 from "./Ficus lyrata/ficusLyrata3.jpeg";
import pothos1 from "./Pothos/pothos1.jpeg";
import pothos2 from "./Pothos/pothos2.jpeg";
import pothos3 from "./Pothos/pothos3.jpeg";
import strelitzia1 from "./Strelitzia nicolai/strelitzia1.jpeg";
import strelitzia2 from "./Strelitzia nicolai/strelitzia2.jpeg";
import strelitzia3 from "./Strelitzia nicolai/strelitzia3.jpeg";


const plants = [
    {
        id:"1",
        photo:"as",
        plantName:"Alocasia Zebrina",
        description:"The alocasia zebrina owes its name to the unique – and eye-catching – yellow and black zebra print-esque markings found on its stems that contrast with its lush green leaves. Its leaves are in fact believed to mirror the floppy ears of an elephant – hence the alocasia zebrina’s other name, ‘elephant ear’.ts leaves are as fascinating as its stems, thanks to their funnel-like concavity, and pronounced veins that are not unlike those seen on a human body. Originally from Southeast Asia, the exotic alocasia zebrina is familiar with the rainforest floor – meaning it loves a moist, humid environment – and its large leaves will follow the path of light (so be sure to rotate yours once in while).Make sure your alocasia is not near your pets!",
        humidity:"55%-60%",
        watering: "Moist but not soggy",
        light: "bright indirect light",
        soil:"Good draining"
    },
    {
        id:"2",
        photo:"as",
        plantName:"Calatha Orbifolia",
        description:"The alocasia zebrina owes its name to the unique – and eye-catching – yellow and black zebra print-esque markings found on its stems that contrast with its lush green leaves. Its leaves are in fact believed to mirror the floppy ears of an elephant – hence the alocasia zebrina’s other name, ‘elephant ear’.ts leaves are as fascinating as its stems, thanks to their funnel-like concavity, and pronounced veins that are not unlike those seen on a human body. Originally from Southeast Asia, the exotic alocasia zebrina is familiar with the rainforest floor – meaning it loves a moist, humid environment – and its large leaves will follow the path of light (so be sure to rotate yours once in while).Make sure your alocasia is not near your pets!",
        humidity:"55%-60%",
        watering: "Moist but not soggy",
        light: "bright indirect light",
        soil:"Good draining"
    },
    {
        id:"3",
        photo:"as",
        plantName:"Monstera Deliciosa",
        description:"The alocasia zebrina owes its name to the unique – and eye-catching – yellow and black zebra print-esque markings found on its stems that contrast with its lush green leaves. Its leaves are in fact believed to mirror the floppy ears of an elephant – hence the alocasia zebrina’s other name, ‘elephant ear’.ts leaves are as fascinating as its stems, thanks to their funnel-like concavity, and pronounced veins that are not unlike those seen on a human body. Originally from Southeast Asia, the exotic alocasia zebrina is familiar with the rainforest floor – meaning it loves a moist, humid environment – and its large leaves will follow the path of light (so be sure to rotate yours once in while).Make sure your alocasia is not near your pets!",
        humidity:"55%-60%",
        watering: "Moist but not soggy",
        light: "bright indirect light",
        soil:"Good draining"
    },
    {
        id:"4",
        photo:"as",
        plantName:"Zamloculcas",
        description:"The alocasia zebrina owes its name to the unique – and eye-catching – yellow and black zebra print-esque markings found on its stems that contrast with its lush green leaves. Its leaves are in fact believed to mirror the floppy ears of an elephant – hence the alocasia zebrina’s other name, ‘elephant ear’.ts leaves are as fascinating as its stems, thanks to their funnel-like concavity, and pronounced veins that are not unlike those seen on a human body. Originally from Southeast Asia, the exotic alocasia zebrina is familiar with the rainforest floor – meaning it loves a moist, humid environment – and its large leaves will follow the path of light (so be sure to rotate yours once in while).Make sure your alocasia is not near your pets!",
        humidity:"55%-60%",
        watering: "Moist but not soggy",
        light: "bright indirect light",
        soil:"Good draining"
    },
    {
        id:"5",
        photo:"as",
        plantName:"Calatha Zebrina",
        description:"The alocasia zebrina owes its name to the unique – and eye-catching – yellow and black zebra print-esque markings found on its stems that contrast with its lush green leaves. Its leaves are in fact believed to mirror the floppy ears of an elephant – hence the alocasia zebrina’s other name, ‘elephant ear’.ts leaves are as fascinating as its stems, thanks to their funnel-like concavity, and pronounced veins that are not unlike those seen on a human body. Originally from Southeast Asia, the exotic alocasia zebrina is familiar with the rainforest floor – meaning it loves a moist, humid environment – and its large leaves will follow the path of light (so be sure to rotate yours once in while).Make sure your alocasia is not near your pets!",
        humidity:"55%-60%",
        watering: "Moist but not soggy",
        light: "bright indirect light",
        soil:"Good draining"
    }
]

export default plants;