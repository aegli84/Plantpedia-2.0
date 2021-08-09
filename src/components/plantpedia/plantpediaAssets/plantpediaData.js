import styled from 'styled-components';
import aloZebrina1 from "./Alocasia zebrina/aloZebrina1.jpeg";
import aloZebrina2 from "./Alocasia zebrina/aloZebrina2.jpeg";
import aloZebrina3 from "./Alocasia zebrina/aloZebrina3.jpeg";
import calatheaOrbifolia1 from "./Calathea Orbifolia/calatheaOrbifolia1.jpeg";
import calatheaOrbifolia2 from "./Calathea Orbifolia/calatheaOrbifolia2.jpeg";
import calatheaZebrina1 from "./Calathea Zebrina/calatheaZebrina1.jpeg";
import calatheaZebrina2 from "./Calathea Zebrina/calatheaZebrina2.jpeg";
import calatheaZebrina3 from "./Calathea Zebrina/calatheaZebrina3.jpeg";
import monstera1 from "./Monstera Deliciosa/monstera1.jpeg";
import monstera2 from "./Monstera Deliciosa/monstera2.jpeg";
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
        picture1:{aloZebrina1},
        picture2:{aloZebrina2},
        picture3:{aloZebrina3},
        plantName:"Alocasia Zebrina",
        description:"The alocasia zebrina owes its name to the unique – and eye-catching – yellow and black zebra print-esque markings found on its stems that contrast with its lush green leaves. Its leaves are in fact believed to mirror the floppy ears of an elephant – hence the alocasia zebrina’s other name, ‘elephant ear’.ts leaves are as fascinating as its stems, thanks to their funnel-like concavity, and pronounced veins that are not unlike those seen on a human body. Originally from Southeast Asia, the exotic alocasia zebrina is familiar with the rainforest floor – meaning it loves a moist, humid environment!.Make sure your alocasia is not near your pets!",
        humidity:"55%-60%",
        watering: "Moist but not soggy",
        light: "Bright indirect light",
        soil:"Good draining"
    },
    {
        id:"2",
        picture1:{calatheaOrbifolia1},
        picture2:{calatheaOrbifolia2},
        plantName:"Calathea Orbifolia",
        description:"Calathea orbifolia is a beautiful houseplant highly sought after due to the exquisite beauty of its large, round leaves and its air-purifying qualities. This beautiful foliage is subtly striped with pale silver-green markings, with the undersides of the leaf also being a pale silver-green.The Calathea orbifolia is bound to add dramatic interest to your houseplant collections and is very much on trend.Make sure your Orbifolia is not near your pets!",
        humidity:"55%-60%",
        watering: "Moist but not soggy",
        light: "Bright defused light",
        soil:"Good draining"
    },
    {
        id:"3",
        picture1:{calatheaZebrina1},
        picture2:{calatheaZebrina2},
        picture3:{calatheaZebrina3},
        plantName:"Calathea Zebrina",
        description:"Calathea zebrina, commonly known as zebra plant, is noted for its striking ornamental leaves which feature zebra-like stripes as suggested by both the specific epithet and the common name. This is a compact, rhizomatous, evergreen perennial that typically grows to 1-3' tall in containers. Make sure your Zebrina is not near your pets!",
        humidity:"60%-65%",
        watering: "Moist but not soggy",
        light: "Bright indirect light",
        soil:"Good draining"
    },
    {
        id:"4",
        picture1:{dieffMaroba1},
        picture2:{dieffMaroba2},
        picture3:{dieffMaroba3},
        plantName:"Dieffenbachia Maroba",
        description:"Dieffenbachia Maroba are easy houseplants that tolerate a wide range of conditions. These plants are popular in homes and offices for their colorful, large leaves.They have a large, white-variegated leaves carried on upright stems brighten this rather soft plant. Most dieffenbachias will grow from 3 to 6 feet (90-180 cm) tall and 1 to 3 feet (30-100 cm) wide. Individual leaves can be 18 inches (45 cm) long by 12 inches (30 cm) wide.Make sure your Dieffenbachia is not near your pets are it is extremely poisonous!",
        humidity:"45%-50%",
        watering: "Moist but not soggy",
        light: "Bright indirect light",
        soil:"Good draining"
    },
    {
        id:"5",
        picture1:{ficusElastica1},
        picture2:{ficusElastica2},
        picture3:{ficusElastica3},
        plantName:"Ficus Elastica",
        description:"Ficus elastica, commonly called India rubber plant, India rubber tree or India rubber fig, is native from the Himalayas to Malaysia, Sumatra and Java. It is a broadleaf evergreen shrub or tree that may grow to 50-100’ tall in its native habitat. It is widely grown in the tropics as an ornamental tree. Mature trees develop banyan-like aerial roots that form trunks. In colder climates, this is an extremely popular houseplant that typically grows to 2-10’ tall. Ficuses are in general safe for pets!",
        humidity:"40%-50%",
        watering: "Medium",
        light: "Bright indirect light",
        soil:"Very well draining"
    },
    {
        id:"6",
        picture1:{ficusLyrata1},
        picture2:{ficusLyrata2},
        picture3:{ficusLyrata3},
        plantName:"Ficus Lyrata",
        description:"Ficus lyrata, commonly called fiddle-leaf fig or banjo fig, is native to Africa. It is a broadleaf evergreen tree that may grow to 60-100' tall in its native habitat. It is sometimes grown in the tropics as an ornamental shade tree. In colder climates, this is a popular houseplant that typically grows to 2-10' tall. Ficuses are in general safe for pets!",
        humidity:"40%-50%",
        watering: "Medium",
        light: "Bright indirect light",
        soil:"Very well draining"
    },
    {
        id:"7",
        picture1:{monstera1},
        picture2:{monstera2},
        plantName:"Monstera Deliciosa",
        description:"Monstera deliciosa, commonly called split-leaf philodendron or swiss cheese plant, is native to Central America. It is a climbing, evergreen perennial vine that is perhaps most noted for its large perforated leaves on thick plant stems and its long cord-like aerial roots. Unfortunately, Monstera deliciosa contains insoluble calcium oxalates making them highly toxic to cats.",
        humidity:"55%-60%",
        watering: "Moist but not soggy",
        light: "Bright indirect light",
        soil:"Slightly acidic pH"
    },
    {
        id:"8",
        picture1:{pothos1},
        picture2:{pothos2},
        picture3:{pothos3},
        plantName:"Pothos",
        description:"Pothos is an evergreen plant with thick, waxy, green, heart-shaped leaves with splashes of yellow. As a houseplant, it is commonly grown as a hanging plant. Pothos can climb by means of aerial roots, and wild or cultivated plants grown outdoors can reach enormous heights using tall trees as support. Please remember to keep away from pets ",
        humidity:"40%-50%",
        watering: "Regular",
        light: "Bright indirect light",
        soil:"Good draining"
    },
    {
        id:"9",
        picture1:{strelitzia1},
        picture2:{strelitzia2},
        picture3:{strelitzia3},
        plantName:"Strelitzia Nicolai",
        description:"Strelitzia nicolai, commonly known as the giant white bird of paradise or wild banana, is a species of banana-like plants with erect woody stems reaching a height of 6 m, and the clumps formed can spread as far as 3.5 m. The 1.8 m-long leaves are grey-green and arranged like a fan at the top of the stems, similar to Ravenala madagascariensis. The inflorescence is composed of a dark blue bract, white sepals and a bluish-purple tongue. Flowers are followed by triangular seed capsules. All parts of the plant are highly toxic, with the flower being the most poisonous. Toxic to: Humans, cats and dogs.",
        humidity:"45%-60%",
        watering: "Moist but not soggy",
        light: "Bright indirect light",
        soil:"Good draining"
    },
    {
        id:"10",
        picture1:{zzPlant1},
        picture2:{zzPlant2},
        picture3:{zzPlant3},
        plantName:"Zamloculcas",
        description:"The Zamioculcas Zamifolia, aka ZZ Plant, is one of those “tough as nails” houseplants that can survive just about anywhere, even in extremely low light. Unfortunately, it also happens to make the list of poisonous houseplants, and all parts of the plant are considered toxic to humans and pets.",
        humidity:"30%-50%",
        watering: "Once every 2 weeks",
        light: "Any light condition",
        soil:"Fast-draining medium"
    },
];

export default plants