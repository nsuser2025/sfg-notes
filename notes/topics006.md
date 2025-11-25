### MDを用いたSFGスペクトル計算

<p>
MDで得られたトラジェクトリを用いて、式1の時間相関関数からSFGスペクトルの $\chi^{(2)}_{pqr}$
を計算できる$^{1}$。
</p>

$$
\begin{align}
\chi^{(2)}_{pqr}(\omega) &= \frac{Q(\omega)}{\omega} \int\_{0}^{\infty} dt \exp(-i \omega t)
\bigl\langle \sum\_{ij} \alpha\_{pq,i}(t) \dot{\mu}\_{r,j}(0) \bigr\rangle \\\\
\\\\
&= \frac{Q(\omega)}{i {\omega}^{2}} \int\_{0}^{\infty} dt \exp(-i \omega t)
\bigl\langle \sum\_{ij} \dot{\alpha}\_{pq,i}(t) \dot{\mu}\_{r,j}(0) \bigr\rangle \tag{1}
\end{align}
$$

$\alpha_{pq,i}$ ... 分子$i$の分極率の$pq$成分
$\mu_{r,j}$ ... 分子$j$の電気双極子の$r$成分

<p>
参考文献 
</p>
<p>
1. Ohto2015_J.Chem.Phys.vol143.124702.pdf
</p>

---

### 式1の確認

$$
\begin{align}
\bigl\<{\dot \alpha}\_{pq,i}(t) {\dot \mu}\_{r,j}(0)\bigr\>
&= \frac{d}{dt} \biggl\[ \frac{1}{2\pi} \int d{\omega}' 
\exp(i{\omega}' t) \bigl\< \alpha_{pq,i}({\omega}') \dot\mu_{r,j}(0) \bigr\> \biggr\] \\\\
\\\\
&= \frac{1}{2\pi} \int d{\omega}' i{\omega}' \exp(i{\omega}' t) 
\bigl\< \alpha_{pq,i}({\omega}') \dot\mu_{r,j}(0) \bigr\> \tag{2}
\end{align}
$$

$$
\begin{align}
& \frac{Q(\omega)}{\omega}\frac{1}{i\omega} \int dt \exp(-i\omega t)
\textcolor{red}{\bigl\<{\dot \alpha}\_{pq,i}(t) {\dot \mu}\_{r,j}(0)\bigr\>} \\\\
\\\\
&= \frac{Q(\omega)}{\omega}\frac{1}{i\omega} \int dt \exp(-i\omega t)
\textcolor{green}{\frac{1}{2\pi} \int d{\omega}' i{\omega}' \exp(i{\omega}' t) 
\bigl\< \alpha_{pq,i}({\omega}') \dot\mu_{r,j}(0) \bigr\>} \\\\
\\\\
&= \frac{Q(\omega)}{\omega}\frac{1}{\textcolor{red}{i\omega}}\frac{1}{\textcolor{red}{2\pi}}
\int d{\omega}' \textcolor{red}{i{\omega}'} \textcolor{red}{2\pi \delta(\omega-{\omega}')}
\bigl\< \alpha_{pq,i}({\omega}') \dot\mu_{r,j}(0) \bigr\> \\\\
\\\\
&= \frac{Q(\omega)}{\omega} 
\textcolor{red}{\bigl\< \alpha_{pq,i}({\omega}) \dot\mu_{r,j}(0) \bigr\>} \\\\
\\\\
&= \frac{Q(\omega)}{\omega} \int dt \exp(-i\omega t)
\bigl\< \alpha_{pq,i}(t) \dot\mu_{r,j}(0) \bigr\> \tag{3}
\end{align}
$$
