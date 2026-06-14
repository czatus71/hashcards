# Statystyka

Q: Kiedy użyć metody momentów?
A: Gdy parametr $\theta$ da się wyznaczyć z momentów rozkładu. Dla $k$ parametrów przyrównujesz $k$ momentów:
$$
\mathbb E_\theta X^j=\frac1n\sum_{i=1}^n X_i^j,\qquad j=1,\ldots,k.
$$

Q: Jak wygląda estymator metodą momentów dla $N(\mu,\sigma^2)$?
A: Z równań $\mathbb E X=\mu$ oraz $\mathbb E X^2=\sigma^2+\mu^2$ dostajesz:
$$
\hat\mu=\overline X,\qquad \hat\sigma^2=\frac1n\sum_{i=1}^n (X_i-\overline X)^2.
$$

Q: Kiedy użyć metody kwantyli?
A: Gdy parametr można zapisać przez kwantyle rozkładu. Schemat:
$$
x_p=F_\theta^{-1}(p),\qquad \theta=g(x_{p_1},\ldots,x_{p_s}),
$$
więc estymator to
$$
\hat\theta=g(\hat x_{p_1},\ldots,\hat x_{p_s}).
$$

Q: Na czym polega metoda plug-in?
A: Zastępujesz dystrybuantę teoretyczną $F$ empiryczną $\hat F_n$:
$$
\theta=T(F)\quad\Longrightarrow\quad\hat\theta=T(\hat F_n).
$$
Jeśli $\theta=\int \varphi(x)\,dF(x)$, to
$$
\hat\theta=\frac1n\sum_{i=1}^n\varphi(X_i).
$$

Q: Jak zdefiniowany jest estymator największej wiarygodności?
A: Dla funkcji wiarygodności $L(\theta;x)$:
$$
\hat\theta_{\mathrm{MLE}}\in\operatorname*{arg\,max}_{\theta\in\Theta} L(\theta;x).
$$
Zwykle maksymalizuje się log-wiarygodność $\ell(\theta)=\log L(\theta)$. 

Q: Jaki jest typowy algorytm liczenia MLE?
A: 1. Napisz $L(\theta;x)=\prod_i f_\theta(x_i)$.
2. Weź $\ell(\theta)=\log L(\theta;x)$.
3. Rozwiąż $\ell'(\theta)=0$.
4. Sprawdź brzeg parametru i maksimum.

Q: Jak wygląda MLE dla rozkładu Poissona?
A: Jeśli $X_i\sim\operatorname{Pois}(\lambda)$, to
$$
L(\lambda)\propto \lambda^{\sum_i x_i}e^{-n\lambda},
$$
więc
$$
\ell'(\lambda)=\frac{\sum_i x_i}{\lambda}-n=0,\qquad \hat\lambda=\overline X.
$$

Q: Co to jest obciążenie estymatora?
A: Dla estymatora $T$ parametru $g(\theta)$ obciążenie to
$$
b_T(\theta)=\mathbb E_\theta[T]-g(\theta).
$$
Estymator jest nieobciążony, gdy $b_T(\theta)=0$ dla każdego $\theta$. 

Q: Co to jest średni błąd kwadratowy?
A: $$
\operatorname{MSE}_\theta(T)=\mathbb E_\theta[(T-g(\theta))^2].
$$
Rozkład na wariancję i obciążenie:
$$
\operatorname{MSE}_\theta(T)=\operatorname{Var}_\theta(T)+b_T(\theta)^2.
$$

Q: Co znaczy, że estymator jest zgodny?
A: Ciąg estymatorów $T_n$ jest zgodny dla $\theta$, gdy dla każdego $\varepsilon>0$:
$$
\mathbb P_\theta(|T_n-\theta|\ge\varepsilon)\to0.
$$
Czyli $T_n\xrightarrow{P}\theta$. 

Q: Jak użyć nierówności Czebyszewa do zgodności?
A: Wystarczy pokazać:
$$
\mathbb E_\theta[T_n]\to\theta\quad\text{oraz}\quad\operatorname{Var}_\theta(T_n)\to0.
$$
Wtedy $T_n\xrightarrow{P}\theta$. 

Q: Co mówi metoda delta?
A: Jeśli
$$
a_n(X_n-c)\Rightarrow V,\qquad g'(c)\ne0,
$$
to
$$
a_n(g(X_n)-g(c))\Rightarrow g'(c)V.
$$

Q: Jaka jest informacja Fishera dla jednej obserwacji?
A: Dla gęstości $f_\theta$:
$$
I_1(\theta)=\mathbb E_\theta\left[\left(\frac{\partial}{\partial\theta}\log f_\theta(X)\right)^2\right].
$$
Dla próby iid:
$$
I_n(\theta)=nI_1(\theta).
$$

Q: Co mówi nierówność Craméra–Rao?
A: Dla nieobciążonego estymatora $T$ funkcji $g(\theta)$:
$$
\operatorname{Var}_\theta(T)\ge\frac{(g'(\theta))^2}{I_n(\theta)}.
$$

Q: Kiedy estymator jest efektywny w sensie Craméra–Rao?
A: Gdy jest nieobciążony i osiąga dolne ograniczenie:
$$
\operatorname{Var}_\theta(T)=\frac{(g'(\theta))^2}{I_n(\theta)}.
$$

Q: Co znaczy, że statystyka jest dostateczna?
A: $T(X)$ jest dostateczna dla $\theta$, gdy po poznaniu $T(X)$ próbka nie zawiera już dodatkowej informacji o $\theta$. Formalnie używa się kryterium faktoryzacji.

Q: Jak brzmi kryterium faktoryzacji Neymana–Fishera?
A: $T$ jest dostateczna wtedy, gdy gęstość lub pmf próby można zapisać jako
$$
f_\theta(x)=g_\theta(T(x))h(x).
$$
Czynnik $h(x)$ nie zależy od $\theta$. 

Q: Jak rozpoznać statystykę minimalnie dostateczną?
A: Często używa się ilorazu wiarygodności. Statystyka $T$ jest minimalnie dostateczna, jeśli
$$
\frac{f_\theta(x)}{f_\theta(y)}\text{ nie zależy od }\theta
\quad\Longleftrightarrow\quad T(x)=T(y).
$$

Q: Co znaczy zupełność statystyki?
A: $T$ jest zupełna, gdy
$$
\mathbb E_\theta[g(T)]=0\text{ dla każdego }\theta
\quad\Longrightarrow\quad
\mathbb P_\theta(g(T)=0)=1\text{ dla każdego }\theta.
$$

Q: Co mówi twierdzenie Rao–Blackwella?
A: Jeśli $W$ jest nieobciążonym estymatorem $g(\theta)$, a $T$ jest dostateczna, to
$$
W^*=\mathbb E_\theta[W\mid T]
$$
też jest nieobciążony i ma nie większą wariancję:
$$
\operatorname{Var}_\theta(W^*)\le\operatorname{Var}_\theta(W).
$$

Q: Co mówi twierdzenie Lehmanna–Scheffégo?
A: Jeśli $T$ jest dostateczna i zupełna, a $W$ jest nieobciążony dla $g(\theta)$, to
$$
\mathbb E[W\mid T]
$$
jest jedynym UMVUE funkcji $g(\theta)$. 

Q: Jaki jest praktyczny algorytm szukania UMVUE?
A: 1. Znajdź statystykę dostateczną i zupełną $T$.
2. Znajdź dowolny nieobciążony estymator $W$.
3. Policz
$$
\mathbb E[W\mid T].
$$
Wynik jest UMVUE. 

Q: Co mówi twierdzenie Basu?
A: Jeśli $T$ jest zupełna i dostateczna, a $A$ jest ancillary, czyli jej rozkład nie zależy od $\theta$, to
$$
T\perp A.
$$

Q: Co oznacza poziom ufności $1-\alpha$?
A: Przedział $[L(X),U(X)]$ ma poziom ufności $1-\alpha$, gdy
$$
\mathbb P_\theta\bigl(\theta\in[L(X),U(X)]\bigr)\ge 1-\alpha.
$$
To własność procedury, nie prawdopodobieństwo po zaobserwowaniu danych.

Q: Co to jest funkcja centralna?
A: Funkcja centralna $Q(X;\theta)$ ma rozkład niezależny od $\theta$. Wybierasz $a,b$ tak, by
$$
\mathbb P(a\le Q(X;\theta)\le b)=1-\alpha,
$$
a potem odwracasz nierówność względem $\theta$. 

Q: Jaki jest przedział ufności dla średniej normalnej przy znanym $\sigma$?
A: Jeśli $X_i\sim N(\mu,\sigma^2)$ i $\sigma$ jest znane, to
$$
Q=\frac{\sqrt n(\overline X-\mu)}{\sigma}\sim N(0,1).
$$
Przedział:
$$
\mu\in\left[\overline X-z_{1-\alpha/2}\frac{\sigma}{\sqrt n},\;\overline X+z_{1-\alpha/2}\frac{\sigma}{\sqrt n}\right].
$$

Q: Jaki jest przedział ufności dla średniej normalnej przy nieznanym $\sigma$?
A: Jeśli $X_i\sim N(\mu,\sigma^2)$ i $\sigma$ nieznane, to
$$
Q=\frac{\sqrt n(\overline X-\mu)}{S}\sim t_{n-1}.
$$
Przedział:
$$
\mu\in\left[\overline X-t_{n-1,1-\alpha/2}\frac{S}{\sqrt n},\;\overline X+t_{n-1,1-\alpha/2}\frac{S}{\sqrt n}\right].
$$

Q: Jak odwrócić jednostronną nierówność dla przedziału ufności?
A: Najpierw zapisz zdarzenie z prawdopodobieństwem $1-\alpha$, np.
$$
\mathbb P_\theta(Q(X;\theta)\le c)=1-\alpha.
$$
Potem algebraicznie rozwiąż nierówność $Q(X;\theta)\le c$ względem $\theta$. 

Q: Co to jest błąd I rodzaju?
A: Błąd I rodzaju to odrzucenie prawdziwej hipotezy zerowej $H_0$. Rozmiar testu to
$$
\sup_{\theta\in\Theta_0}\mathbb P_\theta(\text{odrzucamy }H_0)\le\alpha.
$$

Q: Co to jest błąd II rodzaju?
A: Błąd II rodzaju to nieodrzucenie fałszywej $H_0$. Dla konkretnego $\theta\in\Theta_1$:
$$
\beta_{II}(\theta)=\mathbb P_\theta(\text{nie odrzucamy }H_0).
$$

Q: Co to jest funkcja mocy testu?
A: Dla funkcji testowej $\varphi(X)$ moc to
$$
\beta(\theta)=\mathbb E_\theta[\varphi(X)]
=\mathbb P_\theta(\text{odrzucamy }H_0).
$$

Q: Co mówi twierdzenie Neymana–Pearsona?
A: Dla testowania prostego $H_0:	heta=\theta_0$ przeciw prostemu $H_1:	heta=\theta_1$ test najmocniejszy odrzuca $H_0$, gdy
$$
\frac{f_{\theta_1}(x)}{f_{\theta_0}(x)}>c.
$$

Q: Jak wygląda test z monotonicznym ilorazem wiarygodności?
A: Dla $H_0:	heta\le\theta_0$ przeciw $H_1:	heta>\theta_0$ i MLR względem $T(X)$ test UMP ma postać
$$
\varphi(x)=
\begin{cases}
1,&T(x)>c,\\
\gamma,&T(x)=c,\\
0,&T(x)<c.
\end{cases}
$$
Dobierz $c,\gamma$ z warunku rozmiaru $\alpha$. 

Q: Co to jest p-value?
A: To najmniejszy poziom istotności, przy którym odrzucasz $H_0$:
$$
p(x)=\inf\{\alpha:x\in B_\alpha\}.
$$
Dla testu prawostronnego często:
$$
p(x)=\sup_{\theta\in\Theta_0}\mathbb P_\theta(T(X)\ge T(x)).
$$

Q: Jak wygląda test ilorazu wiarygodności?
A: Statystyka LR:
$$
\lambda(x)=\frac{\sup_{\theta\in\Theta_0}L(\theta;x)}{\sup_{\theta\in\Theta}L(\theta;x)}.
$$
Odrzucasz $H_0$, gdy $\lambda(x)<c$. 

Q: Kiedy test jest UMP?
A: Test jest UMP na poziomie $\alpha$, gdy dla każdego $\theta\in\Theta_1$ ma moc nie mniejszą niż każdy inny test poziomu $\alpha$:
$$
\beta_\varphi(\theta)\ge\beta_\psi(\theta).
$$

Q: Czym różni się test jednostronny od dwustronnego?
A: Jednostronny ma alternatywę typu $\theta>\theta_0$ albo $\theta<\theta_0$ i zwykle odrzuca w jednym ogonie. Dwustronny ma $\theta\ne\theta_0$ i odrzuca w obu ogonach.

Q: Co oznacza poziom istotności $\alpha$?
A: $\alpha$ ogranicza prawdopodobieństwo fałszywego odrzucenia $H_0$:
$$
\sup_{\theta\in\Theta_0}\mathbb P_\theta(\text{odrzucamy }H_0)\le\alpha.
$$

