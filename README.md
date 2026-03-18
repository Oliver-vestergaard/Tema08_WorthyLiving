# Teknisk Dokumentation: Tema08_Worthy Living

## Om projektet:

MMD - 2. semester, Tema 8
I dette projekt har vi valgt at fokusere på kategorien Produkter.
projektet omhandler en webshop som gøres dynamisk ved at hente relevant indhold fra Rest Api’et :
https://dummyjson.com/products
De relevante underkategorier: Home-decoration, Groceries og Furniture, kan findes ved at indsætte kategorinavnet således: https://dummyjson.com/products/category/furniture

Løsningen er udviklet med Javascript, CSS og Html.

## Navigationen af vores løsning:

- Forside
- Menu med oversigt over kategorier
- Vælg en kategori
- Læg i indkøbskurv
- Fortsæt til betalingssiden
- Udfyld formularen og tryk submit
- Yderligere en side med “Om Os” hvis brugeren er interesseret
- Footer med tilmeldings formular til et nyhedsbrev og sociale medier

## Projekt mappe opsætning:

```bash
Tema08_WorthyLiving/
├── index.html
├── aboutUs.html
├── card.html
├── productList.html
├── productDetails.html
├── css/
│   ├── global.css
│   ├── index.css
│   ├── aboutUs.css
│   ├── card.css
│   ├── productList.css
│   └── productDetails.css
├── js/
│   ├── aboutUs.js
│   ├── burger.js
│   ├── cart.js
│   ├── footer.js
│   ├── index.js
│   ├── productDetail.js
│   └── productList.js
├── README.md
├── logo/
└── ikons/
```

## Filbeskrivelser

### Alle HTML sider:

- index.html - forsiden
- productList.html - liste med produkter fra API’et
- productDetails.html - viser detaljer om valgt produkt
- aboutUs.html - kort beskrivelse om os
- cart.html - indkøbskurv som indholder formularen

### Alle CSS filer:

- global.css - fælles design for alle sider
- index.css - styrer designet på forsiden
- productList.css - styrer designet på produktlisten
- productDetails.css - styrer designet på detaljesiden
- aboutUs.css - styrer designet på om os siden
- cart.css - styrer designet på formularen

### Alle JavaScript filer:

- index.js - styrer det dynamiske indhold på forsiden
- productList.js - styrer det dynamiske indhold på produktlisten
- productDetails.js - styrer det dynamiske indhold på detaljesiden
- aboutUs.js - styrer det dynamiske indhold på om os siden
- cart.js - styrer det dynamiske indhold på formularen
- burger.js - styrer indhold på burger menuen
- footer.js - styrer Form indhold i footeren

## Sådan fungerer koden:

Vi har lavet en struktur hvor hver enkelt HTML har sin egen Javascipt og Css Det giver os bedre kontrol og er med til at sikre at Javascripten kører og bliver indlæst på hver side. Samtidig sikrer det også at styling på den enkelte side bliver mere overskuelig og der ikke overskrives styles på de andre HTML sider end den man arbejder på.  Derudover har vi oprettet en global.Css. Denne fil indeholder styles på elementer der går igen på alle sider:

- Font
- Reset (fjerner browserens default styles)
- Style af Menu og Footer
- Gennerelle margins
- farve variable

## Flow:

1. Siden bliver loaded
2. JavaScript kører
3. Dataen hentes fra DummyJSON API’et
4. Dataen bliver gennemgået med et loop
5. HTML indsættes i DOM’en
6. Brugeren kan klikke på en specifik kategori på forsiden og videresendes til productList.js som er et overblik over produkterne i valgte kategori.
7. De videresendes derefter til productDetails der læser id’en i url så de rigtige produkter bliver vist.
   Dette gør det muligt både at genbruge den samme HTML side for både productList.js og productDetails.js ved brug af id’et.
8. cart.js styrer formularen/formen på sitet og validere inputfelterne.
   Dette sikrer at brugeren udfylder de felter som er obligatoriske og formularen udfyldes korrekt. Dette gør den mere brugervenlig og mindsker fejl der evt. kunne opstå i betalingsprocessen

## Hvordan koden fungerer:

Hver side har sin egen JavaScript fil
Det kan ses hvilke sider bruges til hvad i “Filbeskrivelser”

- index.js - brugt på forsiden hvor menuen og indholdet, f.eks links og kategorier bliver vist dynamisk.
- productList.js - henter data fra DummyJSON API’et og viser en liste med produkter i en specifik kategori.
- productDetails.js - henter data fra DummyJSON API’et og viser et specifikt produkt med flere detaljer ud fra produktets ID.
- cart.js - behandler formularen og den indtastede data fra brugeren.
- footer.js - sender en fejlmeddelse hvis der er en fejl

## Navngivning:

Vi har igennem projektet prøvet at navngive vores mapper, filer, classes, variabler, og funktioner så overskueligt som muligt.

#### Eksempler på variabler:

- const selectedCategory = urlParams.get("category");
- const header = document.querySelector(".productlist_header");
- const listContainer = document.querySelector(".productlist_1_1");
- const sortByPriceBtns = document.querySelectorAll(".sortByPriceBtn");

#### Eksempler på funktioner:

- function fetchCategoryData(category)
- function getProducts(products)
- function getData()

#### camelCase:

- Gør koden ensartet
- Gør koden lettere at læse

#### Kommentarer

Kommentarer findes forskellige steder i koden hvor det giver mening, f.eks ved funktioner og fetch med DOM-manipulation. Men de bliver også brugt i f.eks HTML og CSS for at give overblik.

#### Eksempler på kommentarer:

- <!--CSS--> <link rel="stylesheet" href="css/global.css">
- <!--Js--> <script src="js/burger.js" defer></script>
- //bruge de tags i JSON til at fetch data specifikt til "tilbehør til dyr" --> tagget skrives i html a tag
- if (selectedTag) {products = products.filter((product) => product.tags.includes(selectedTag)); }

## Data og JSON

Dataen bliver hentet fra et API i JSON-format.
Et objekt kan fx se sådan ud:
{"id": 11, "title": "Annibale Colombo Bed", "description": “kort beskrivelse af produkt”, "category": "furniture", "price": 1899.99, "discountPercentage": 8.57, "stock": 88, "tags": [ "furniture", "beds" ]}

## Properties som vi bruger i denne opgave:

- id - bruges til at sende brugeren til productDetails siden
- title - navnet på produktet
- description - beskrivelse af produktet
- category - produktkategori
- price - prisen på produktet
- discountedPercentage - rabat på produktet i procent
- stock - hvor mange der er på lager
- tags - bliver brugt til at ydere filtrere nogle vare
- reviews - Kundeanmeldelser
- Brand - Brand navn
- weight - vægt af produktet
- Dimensions - Width, Height og Depth af produktet
- Images - Produkt billeder

## Formular og validering:

Vi har lavet en formular/form til vores cart.html hvor brugeren skal indtaste specifikke oplysninger.
HTML-validering:

- Required - felter der skal udfyldes
- type=”email” - validere den indtastede email
- name=”fornavn” - brugerens navn
- name=”efternavn” - brugerens efternavn
- name=”adresse” - brugerens adresse
- name=”postnummer” - brugerens postnummer
- name=”by” - hvilken by brugeren bor i
- name=”betaling” - hvilken måde brugeren vil betale på
- type=”submit” - indsender ordren

## Branches og hvordan de bruges:

Hver gang man starter på et nyt element i koden oprettes en branch fra Main. Sammen med vores opsætning med individuelle JavaScripts og CSS’er til hver side, gør det det muligt at samarbejde om en kode uden at forstyrre hinandens arbejde og derved undgå merge conflicts.

#### Eksempler på branches:

- ProductDetail-layout-(navn)
- Index-NavigationAndFooter-(navn)

Når et element er færdig og virker, commites det og pushes til GitHub hvorefter ens ændringer merges ind i Main.  Herefter skifter man, i VsCode, tilbage i Main, synkroniserer (push & pull), laver en ny branch hvorefter punkterne gentages.

## Bæredygtigt webdesign

- Minimalistisk design
  Kun relevante billeder
- Optimere billeder og andet indhold
- Kun brug af 3 fonttyper
- Ingen videoer
- Mindre brug af SoMe
- Kun relevant og minimalt JavaScript

## udfordringer undervejs

Nogle af de udfordringer vi har haft undervejs har været at vi i dette projekt kun skulle have fat i 4 ud af de 24 kategorier. Vi har derfor, i vores menu, linket til de 4 kategorier med URL’en “productlist.html?category=groceries” hvor “groceries” ændres alt efter hvilket menu punkt der trykkes på.

Det vil også sige, at skulle webshoppen opdateres til også at inkludere, eksemplevis, kategorien “beauty” skal der i menuen blot manuelt tilføjes et nyt punkt hvor den gældende URL indsættes i linket.
I javescripten, der er tilhørende productList, er det altså muligt at hente alle kategorierne.

## gruppemedlemmer

- Katrine
- Nynne
- Louise
- Camille
- Oliver
