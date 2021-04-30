# Tema de casa Web

Proiect realizat pentru cursul de Tehnologii Web.

## Descriere generala

Proiectul consta intr-un magazin online cu articole sport realizat folosind framework-ul React.

Fiecare pagina contine un navbar si un footer care ofera utilizatorului posibilitatea de a naviga mai usor.

### Home page

Pagina principala care contine:
-un background video, cand pagina este incarcata de pe un dispozitiv mobil video-ul este inlocuit cu o imagine
-3 cartonase cu informatii
-4 componente create pentru a redirectiona utilizatorul pe pagina de market la categoria aleasa. Cand utilizatorul pune cursorul peste o componenta background-ul acesteia se blureaza si apare un buton, in cazul in care pagina este incarcata de pe un dispozitiv mobil background si butonul de pe componenta apar din start.

### Market page

Pagina care afiseaza produsele obtinute dintr-un request la un mock api. Fiecare produs este afisat prin intermediu unei componente care cuprinde imaginea produsului si informatii despre acesta, cand un utilizator apasa pe aceasta componenta apare un modal care ofera mai multe informatii despre produs. Produsele din aceasta pagina pot sa fie filtrate adaugand la url categoria dupa care se doreste sa se filtreze pagina, de exemplu calea "Market/Judo" va afisa toate produsele din categoria Judo

###Login/Register Page

Paginile care permit utilizatorului sa se logeze sau inregistreze. Pagina de inregistrare este disponibila din pagina de logare apasand link ul din mesajul "Don't have an account, register now!"

###Admin Page

Pagina de admin este valabila la path-ul "/admin", aceasta listeaza toti utilizatorii inregistrati si ofera optiunile de schimbare a username-ului, a parolei si stergerea contului.
