# Funkcje zespolone

Q: Kiedy szereg zespolony $\sum z_n$, gdzie $z_n=x_n+iy_n$, jest zbieżny?
A: Wtedy i tylko wtedy, gdy zbieżne są oba szeregi rzeczywiste:
$$
\sum x_n \quad\text{oraz}\quad \sum y_n.
$$

Q: Co daje bezwzględna zbieżność szeregu zespolonego?
A: Jeśli $\sum |z_n|$ jest zbieżny, to $\sum z_n$ też jest zbieżny.

Q: Podaj kryterium Weierstrassa dla szeregu funkcyjnego.
A: Jeśli dla każdego $z\in V$ zachodzi $|f_n(z)|\le a_n$ i szereg $\sum a_n$ jest zbieżny, to $\sum f_n$ jest zbieżny jednostajnie na $V$.

Q: Czym różni się zbieżność punktowa od jednostajnej?
A: W zbieżności punktowej numer $n_0$ może zależeć od punktu $z$. W zbieżności jednostajnej jeden numer $n_0$ działa dla wszystkich $z$ w zbiorze.

Q: Co oznacza niemal jednostajna zbieżność na obszarze $V$?
A: Zbieżność jednostajną na każdym zwartym podzbiorze $V$.

Q: Co wiadomo o szeregu potęgowym $\sum_{n=0}^\infty a_n(z-z_0)^n$ wewnątrz i na zewnątrz koła zbieżności?
A: - Dla $|z-z_0|<R$ jest zbieżny bezwzględnie i niemal jednostajnie.
- Dla $|z-z_0|>R$ jest rozbieżny.
- Dla $|z-z_0|=R$ każdy punkt trzeba zbadać osobno.

Q: Podaj wzór Cauchy'ego-Hadamarda na promień zbieżności.
A: $$
\frac1R=\limsup_{n\to\infty}\sqrt[n]{|a_n|}.
$$

Q: Kiedy można policzyć promień zbieżności z ilorazu kolejnych współczynników?
A: Gdy istnieje granica:
$$
\frac1R=\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|.
$$

Q: Jak znaleźć promień szeregu zawierającego tylko potęgi $(z-z_0)^{kn}$?
A: Wprowadź $w=(z-z_0)^k$, policz promień $R_w$ szeregu w zmiennej $w$, a potem rozwiąż:
$$
|z-z_0|^k<R_w.
$$
Zatem $R=\sqrt[k]{R_w}$.

Q: Jak badać brzeg koła zbieżności szeregu potęgowego?
A: 1. Podstaw $z-z_0=Re^{it}$.
2. Sprawdź zbieżność bezwzględną.
3. Jeśli jej nie ma, użyj np. kryterium Dirichleta.
4. Osobno sprawdź punkty, w których składnik oscylacyjny przestaje oscylować.

Q: Podaj kryterium Dirichleta w wersji używanej na brzegu koła zbieżności.
A: Jeśli $a_n\ge0$, ciąg $(a_n)$ maleje do zera, a sumy częściowe $\sum_{k=1}^N b_k$ są wspólnie ograniczone, to $\sum a_nb_n$ jest zbieżny.

Q: Kiedy sumy częściowe szeregu geometrycznego $\sum_{k=0}^N q^k$ są ograniczone?
A: Gdy $|q|=1$ oraz $q\ne1$, ponieważ
$$
\left|\sum_{k=0}^Nq^k\right|
=\left|\frac{1-q^{N+1}}{1-q}\right|
\le\frac2{|1-q|}.
$$

Q: Czy różniczkowanie szeregu potęgowego zmienia jego promień zbieżności?
A: Nie. Szereg i jego pochodna mają ten sam promień zbieżności:
$$
\left(\sum_{n=0}^\infty a_n(z-z_0)^n\right)'
=\sum_{n=1}^\infty na_n(z-z_0)^{n-1}.
$$

Q: Jak rozwinąć $\frac1{1-z}$ w szereg potęgowy?
A: $$
\frac1{1-z}=\sum_{n=0}^\infty z^n,\qquad |z|<1.
$$

Q: Jak rozwinąć funkcję wymierną wokół punktu $z_0$?
A: Przepisz każdy składnik do postaci
$$
\frac{C}{1-w(z)}
$$
i użyj szeregu geometrycznego. Warunek $|w(z)|<1$ wyznacza koło zbieżności.

Q: Jaką własność warto zapamiętać z tej reguły?
A: Promień zbieżności szeregu Taylora funkcji holomorficznej wokół $z_0$ sięga co najmniej do [najbliższego punktu osobliwego].

Q: Podaj nierówność Cauchy'ego dla współczynników szeregu $f(z)=\sum a_nz^n$.
A: Jeśli $f$ jest holomorficzna i $|f(z)|\le M$ w kole $|z|<R$, to
$$
|a_n|\le\frac{M}{R^n}.
$$

Q: Co mówi twierdzenie Liouville'a?
A: Każda całkowita i ograniczona funkcja jest stała.

Q: W jakim obszarze zbiega szereg Laurenta?
A: W pierścieniu
$$
r<|z-z_0|<R,
$$
bezwzględnie i niemal jednostajnie.

Q: Jak znaleźć wewnętrzny promień zbieżności części głównej szeregu Laurenta?
A: Podstaw
$$
w=\frac1{z-z_0}.
$$
Jeśli otrzymany szereg potęgowy ma promień $\rho$, to $r=1/\rho$.

Q: Czy rozwinięcie Laurenta funkcji jest takie samo we wszystkich pierścieniach wokół $z_0$?
A: Nie. Zależy od pierścienia, bo ten sam czynnik geometryczny rozwija się inaczej dla $|w|<1$ i $|w|>1$.

Q: Jak rozwinąć $\frac1{z-a}$ dla $|z|<|a|$?
A: $$
\frac1{z-a}
=-\frac1a\frac1{1-z/a}
=-\sum_{n=0}^{\infty}\frac{z^n}{a^{n+1}}.
$$

Q: Jak rozwinąć $\frac1{z-a}$ dla $|z|>|a|$?
A: $$
\frac1{z-a}
=\frac1z\frac1{1-a/z}
=\sum_{n=0}^{\infty}\frac{a^n}{z^{n+1}}.
$$

Q: Jak wyznaczyć pierścienie dla rozwinięć Laurenta funkcji wymiernej wokół $z_0$?
A: Policz odległości od $z_0$ do wszystkich punktów osobliwych i uporządkuj je. Kolejne odległości są granicami pierścieni.

Q: Jak rozpoznać osobliwość pozorną z szeregu Laurenta?
A: Część główna znika, czyli $a_n=0$ dla wszystkich $n<0$.

Q: Jak rozpoznać biegun rzędu $k$ z szeregu Laurenta?
A: Część główna jest skończona i zaczyna się od
$$
\frac{a_{-k}}{(z-z_0)^k},\qquad a_{-k}\ne0.
$$

Q: Jak rozpoznać osobliwość istotną z szeregu Laurenta?
A: Część główna ma nieskończenie wiele niezerowych wyrazów.

Q: Podaj kryterium Riemanna dla osobliwości pozornej.
A: Izolowana osobliwość $z_0$ jest pozorna wtedy i tylko wtedy, gdy $f$ jest ograniczona w pewnym sąsiedztwie $z_0$.

Q: Jak granica funkcji klasyfikuje izolowaną osobliwość?
A: - Granica właściwa: osobliwość pozorna.
- Granica równa $\infty$: biegun.
- Granica nie istnieje: osobliwość istotna.

Q: Jak ustalić rząd bieguna $z_0$?
A: Znajdź najmniejsze $k\ge1$, dla którego
$$
\lim_{z\to z_0}(z-z_0)^kf(z)
$$
jest właściwa i niezerowa. Wtedy biegun ma rząd $k$.

Q: Jaki jest związek między biegunem $f$ a zerem $1/f$?
A: $z_0$ jest biegunem rzędu $k$ funkcji $f$ wtedy i tylko wtedy, gdy jest zerem rzędu $k$ funkcji $1/f$.

Q: Jak bada się osobliwość funkcji $f$ w nieskończoności?
A: Bada się osobliwość funkcji
$$
g(w)=f(1/w)
$$
w punkcie $w=0$.

Q: Jaką osobliwość ma $e^{1/z}$ w $z=0$?
A: Istotną, bo
$$
e^{1/z}=\sum_{n=0}^{\infty}\frac1{n!z^n}
$$
ma nieskończoną część główną.

Q: Jaką osobliwość ma $\frac{\cos z-1}{z^2}$ w $z=0$?
A: Pozorną, ponieważ
$$
\frac{\cos z-1}{z^2}
=-\frac1{2!}+\frac{z^2}{4!}-\cdots
$$
nie ma części głównej.

Q: Jak klasyfikować osobliwość ilorazu $f/g$ w punkcie $z_0$ za pomocą rzędów zer?
A: Jeśli $f$ ma zero rzędu $m$, a $g$ zero rzędu $n$, to:

- $m\ge n$: osobliwość jest pozorna,
- $m<n$: jest biegunem rzędu $n-m$.

Q: Jakie jest residuum w punkcie pozornie osobliwym?
A: $$
\operatorname{Res}_{z_0}f=0.
$$

Q: Jak policzyć residuum w biegunie prostym?
A: $$
\operatorname{Res}_{z_0}f=\lim_{z\to z_0}(z-z_0)f(z).
$$

Q: Jak policzyć residuum ilorazu $g/h$ w prostym zerze mianownika?
A: Jeśli $h(z_0)=0$ i $h'(z_0)\ne0$, to
$$
\operatorname{Res}_{z_0}\frac{g}{h}=\frac{g(z_0)}{h'(z_0)}.
$$

Q: Jak policzyć residuum w biegunie rzędu $k$?
A: $$
\operatorname{Res}_{z_0}f
=\frac1{(k-1)!}
\lim_{z\to z_0}
\frac{d^{k-1}}{dz^{k-1}}
\left((z-z_0)^kf(z)\right).
$$

Q: Jak policzyć residuum w punkcie istotnie osobliwym?
A: Rozwiń funkcję w szereg Laurenta i odczytaj współczynnik przy $(z-z_0)^{-1}$.

Q: Podaj twierdzenie o residuach.
A: Jeśli wewnątrz dodatnio zorientowanej krzywej $\Gamma$ leżą izolowane osobliwości $z_1,\ldots,z_n$, to
$$
\int_\Gamma f(z)\,dz
=2\pi i\sum_{k=1}^n\operatorname{Res}_{z_k}f.
$$

Q: Jakie punkty osobliwe uwzględnia się w twierdzeniu o residuach?
A: Tylko punkty leżące wewnątrz konturu. Żaden punkt osobliwy nie może leżeć na konturze.

Q: Jaki jest algorytm liczenia całki konturowej przez residua?
A: 1. Znajdź osobliwości funkcji.
2. Ustal, które leżą wewnątrz konturu.
3. Policz ich residua.
4. Zsumuj je i pomnóż przez $2\pi i$.

Q: Jakie oszacowanie zeruje całkę po półokręgu o promieniu $R$?
A: Jeśli na łuku
$$
|f(z)|\le\frac{M}{|z|^\alpha},\qquad \alpha>1,
$$
to
$$
\left|\int_{C_R}f(z)\,dz\right|
\le\pi R\frac{M}{R^\alpha}\to0.
$$

Q: Jak szybciej sprawdzić, czy całka funkcji wymiernej po dużym półokręgu znika?
A: Dla $f(z)=P(z)/Q(z)$ wystarczy zwykle
$$
\deg Q\ge\deg P+2.
$$
Wtedy $f(z)=O(|z|^{-2})$ lub szybciej.

Q: Jaką funkcję zespoloną wybrać dla całki zawierającej $\cos x$?
A: Zastąp $\cos x$ częścią rzeczywistą wykładnika:
$$
\cos x=\Re(e^{ix}),
\qquad
F(z)=R(z)e^{iz}.
$$
Na końcu weź część rzeczywistą wyniku.

Q: Jaką funkcję zespoloną wybrać dla całki zawierającej $\sin x$?
A: $$
\sin x=\Im(e^{ix}),
\qquad
F(z)=R(z)e^{iz}.
$$
Na końcu weź część urojoną wyniku.

Q: Dlaczego dla $z=x+iy$ w górnej półpłaszczyźnie czynnik $e^{iz}$ jest wygodny?
A: $$
|e^{iz}|=|e^{ix-y}|=e^{-y}\le1.
$$
Nie psuje więc oszacowania na górnym półokręgu.

Q: Jaki jest algorytm dla całki $\int_{-\infty}^{\infty}R(x)\,dx$ przez górny półokrąg?
A: 1. Weź $f(z)=R(z)$.
2. Sprawdź brak biegunów na osi rzeczywistej.
3. Sprawdź zbieżność i zanik całki po łuku.
4. Policz residua biegunów z $\Im z>0$.
5. Użyj $\int_{-\infty}^{\infty}R(x)\,dx=2\pi i\sum\operatorname{Res} f$.

Q: Jaki jest algorytm dla całki z $\cos x$ lub $\sin x$?
A: 1. Weź $F(z)=R(z)e^{iz}$.
2. Zamknij kontur w górnej półpłaszczyźnie.
3. Policz residua biegunów z $\Im z>0$.
4. Oblicz $\int_{-\infty}^{\infty}R(x)e^{ix}\,dx$.
5. Weź część rzeczywistą dla cosinusa albo urojoną dla sinusa.

Q: Jak wykorzystać parzystość przy całkach od $0$ do $\infty$?
A: Jeśli $f$ jest parzysta i całkowalna, to
$$
\int_0^\infty f(x)\,dx
=\frac12\int_{-\infty}^{\infty}f(x)\,dx.
$$

Q: Jak zamienić całkę trygonometryczną po $[0,2\pi]$ na całkę po okręgu jednostkowym?
A: Podstaw
$$
z=e^{it},\quad dz=iz\,dt,\quad
\cos t=\frac12\left(z+\frac1z\right),\quad
\sin t=\frac1{2i}\left(z-\frac1z\right).
$$

Q: Jak zdefiniowane jest residuum w nieskończoności?
A: $$
\operatorname{Res}_\infty f
=-\operatorname{Res}_{0}\left(\frac1{z^2}f\left(\frac1z\right)\right).
$$

Q: Jaki jest związek sumy wszystkich residuów skończonych z residuum w nieskończoności?
A: $$
\sum_k\operatorname{Res}_{z_k}f=-\operatorname{Res}_\infty f.
$$

Q: Jak zacząć zadanie o $\max_{|z|\le R}|f(z)|$ dla funkcji holomorficznej?
A: Z zasady maksimum ogranicz szukanie do brzegu:
$$
|z|=R.
$$
Następnie podstaw $z=Re^{it}$ i maksymalizuj funkcję rzeczywistą $|f(Re^{it})|^2$.

Q: Dlaczego zwykle maksymalizuje się $|f(z)|^2$, a nie $|f(z)|$?
A: Kwadrat usuwa pierwiastek i pozwala użyć
$$
|f(z)|^2=f(z)\overline{f(z)}.
$$
Na okręgu można też zastąpić $\bar z$ przez $R^2/z$.

Q: Co mówi zasada minimum modułu?
A: Jeśli $f$ jest holomorficzna i nie ma zer, to niestała funkcja $|f|$ nie osiąga minimum wewnątrz obszaru.

Q: Co trzeba sprawdzić przed użyciem zasady minimum?
A: Czy funkcja ma zera w badanym obszarze. Jeśli ma, minimum modułu wynosi $0$.

Q: Podaj lemat Schwarza.
A: Jeśli $f$ jest holomorficzna w kole jednostkowym, $|f(z)|\le1$ i $f(0)=0$, to
$$
|f(z)|\le|z|,\qquad |f'(0)|\le1.
$$
Równość w punkcie niezerowym zachodzi tylko dla $f(z)=e^{i\alpha}z$.

Q: Jaki trik rozpoczyna dowód lub zastosowanie lematu Schwarza?
A: Ponieważ $f(0)=0$, zdefiniuj
$$
g(z)=
\begin{cases}
f(z)/z,&z\ne0,\\
f'(0),&z=0.
\end{cases}
$$
Funkcja $g$ jest holomorficzna.

Q: Podaj nierówność Schwarza-Picka dla pochodnej.
A: Jeśli $f:\mathbb D\to\mathbb D$ jest holomorficzna, to
$$
\frac{|f'(z)|}{1-|f(z)|^2}
\le
\frac1{1-|z|^2}.
$$

Q: Jak sprawdzić, czy zadane wartości $f(z_0)$ i $f'(z_0)$ są możliwe dla odwzorowania $f:\mathbb D\to\mathbb D$?
A: Podstaw dane do nierówności Schwarza-Picka:
$$
|f'(z_0)|
\le
\frac{1-|f(z_0)|^2}{1-|z_0|^2}.
$$
Jeśli warunek nie zachodzi, taka funkcja nie istnieje.

Q: Co mówi zasada argumentu dla funkcji meromorficznej?
A: $$
\frac1{2\pi i}\int_\Gamma\frac{f'(z)}{f(z)}\,dz=N-P,
$$
gdzie $N$ to liczba zer, a $P$ liczba biegunów wewnątrz $\Gamma$, liczone z krotnościami.

Q: Jakie residuum ma $f'/f$ w zerze $f$ rzędu $k$?
A: $$
\operatorname{Res}_{z_0}\frac{f'}f=k.
$$

Q: Jakie residuum ma $f'/f$ w biegunie $f$ rzędu $k$?
A: $$
\operatorname{Res}_{z_0}\frac{f'}f=-k.
$$

Q: Podaj twierdzenie Rouchégo.
A: Jeśli $f$ i $g$ są holomorficzne, a na konturze $\Gamma$
$$
|g(z)|<|f(z)|,
$$
to $f$ oraz $f+g$ mają wewnątrz $\Gamma$ tyle samo zer, licząc z krotnościami.

Q: Jaki jest algorytm użycia twierdzenia Rouchégo dla wielomianu na okręgu $|z|=R$?
A: 1. Wybierz dominujący składnik lub grupę składników $f$.
2. Oznacz resztę przez $g$.
3. Oszacuj od dołu $|f|$ i od góry $|g|$ na $|z|=R$.
4. Wykaż ścisłą nierówność $|g|<|f|$.
5. Policz zera prostszej funkcji $f$ w kole.

Q: Jaki składnik wielomianu zwykle dominuje na dużym okręgu?
A: Składnik najwyższego stopnia, ponieważ na $|z|=R$ ma moduł $|a_n|R^n$.

Q: Jaki składnik wielomianu może dominować na małym okręgu?
A: Wyraz stały albo składnik niskiego stopnia. Trzeba porównać ich moduły z sumą modułów pozostałych składników.

Q: Jak policzyć liczbę zer w pierścieniu $r<|z|<R$?
A: Policz liczbę zer w kole $|z|<R$ i odejmij liczbę zer w kole $|z|<r$. Trzeba też wykluczyć zera na obu okręgach.

Q: Dlaczego nierówność w twierdzeniu Rouchégo musi być ścisła?
A: Ścisłość gwarantuje, że $f+\lambda g$ nie zeruje się na konturze dla $\lambda\in[0,1]$. Bez niej liczba zer może zmienić się przez przejście zera przez kontur.

Q: Jak użyć Rouchégo do równania $e^z=p(z)$ w małym kole?
A: Przenieś wszystko na jedną stronę i wybierz prostszy dominujący składnik na brzegu, np. część wielomianową albo początkowe wyrazy szeregu $e^z$. Następnie porównaj moduły na okręgu.

Q: Co oznacza geometryczna wersja zasady argumentu?
A: Liczba zer funkcji wewnątrz konturu jest liczbą okrążeń obrazu $f(\Gamma)$ wokół zera:
$$
N=\frac1{2\pi}\Delta_\Gamma\arg f.
$$

