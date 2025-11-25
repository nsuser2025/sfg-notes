### MDを用いたSFGスペクトル計算

<p>
MDで得られたトラジェクトリを用いて、式1の時間相関関数からSFGスペクトルの $\chi^{(2)}_{pqr}$
を計算できる$^{1}$。
</p>

$$
\begin{align}
\chi^{(2)}_{pqr}(\omega) &= \frac{Q(\omega)}{\omega} \int^{\infty}_{0} dt \exp(-i \omega)
\end{align}
$$

<p>
参考文献 
</p>
<p>
1. Ohto2015_J.Chem.Phys.vol143.124702.pdfの式5
</p>

---

### 導出

$$
\begin{align}
\bigl\<{\dot \alpha}\_{pq}(t) {\dot \mu}\_{r}(0)\bigr\>
&= \frac{d}{dt} \biggl\[ \frac{1}{2\pi} \int d{\omega}' 
\exp(i{\omega}' t) \bigl\< \alpha_{pq}({\omega}') \dot\mu_{r}(0) \bigr\> \biggr\] \\\\
\\\\
&= \frac{1}{2\pi} \int d{\omega}' i{\omega}' \exp(i{\omega}' t) 
\bigl\< \alpha_{pq}({\omega}') \dot\mu_{r}(0) \bigr\> \tag{1}
\end{align}
$$

$$
\begin{align}
& \frac{Q(\omega)}{\omega}\frac{1}{i\omega} \int dt \exp(-i\omega t)
\textcolor{red}{\bigl\<{\dot \alpha}\_{pq}(t) {\dot \mu}\_{r}(0)\bigr\>} \\\\
\\\\
&= \frac{Q(\omega)}{\omega}\frac{1}{i\omega} \int dt \exp(-i\omega t)
\textcolor{green}{\frac{1}{2\pi} \int d{\omega}' i{\omega}' \exp(i{\omega}' t) 
\bigl\< \alpha_{pq}({\omega}') \dot\mu_{r}(0) \bigr\>} \\\\
\\\\
&= \frac{Q(\omega)}{\omega}\frac{1}{\textcolor{red}{i\omega}}\frac{1}{\textcolor{red}{2\pi}}
\int d{\omega}' \textcolor{red}{i{\omega}'} \textcolor{red}{2\pi \delta(\omega-{\omega}')}
\bigl\< \alpha_{pq}({\omega}') \dot\mu_{r}(0) \bigr\> \\\\
\\\\
&= \frac{Q(\omega)}{\omega} 
\textcolor{red}{\bigl\< \alpha_{pq}({\omega}) \dot\mu_{r}(0) \bigr\>} \\\\
\\\\
&= \frac{Q(\omega)}{\omega} \int dt \exp(-i\omega t)
\bigl\< \alpha_{pq}(t) \dot\mu_{r}(0) \bigr\> \tag{2}
\end{align}
$$
