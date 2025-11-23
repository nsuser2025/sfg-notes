### 分極の定義

<p>
分極 $\mathbf{P}$ は単位体積あたりの電気双極子モーメントの平均として定義される。
永久双極子モーメントをもつ分子は、電場が印加されるとその向きがそろう（配向する）ことで平均双極子モーメントが変化し、分極に寄与する。
さらに、電場によって原子や分子を構成する電子・原子核・イオンの位置がわずかに変位し、誘起双極子モーメントも生じる。
$\mathbf{P}$ には、これら永久双極子の配向による寄与と誘起双極子による寄与の両方が含まれる。
</p>

$$
\begin{align}
{\bf P} &= \frac{1}{\Delta V} \sum_{i \in \Delta V} \mathbf{p}\_{i} \tag{1} \\\\
\end{align}
$$

$\mathbf{p}_{i}$: 分子 $i$ の電気双極子モーメント
$\Delta V$: 単位体積

### 分極電荷と分極電荷密度

<p>
誘電体に電場が印加されると分極が生じ、内部の電荷分布がわずかに変化する。この結果、誘電体内部や表面には、実際の自由電荷とは区別される「見かけの電荷」
を定義できる。この見かけの電荷を分極電荷という。分極電荷は、原子核や電子、あるいは分子を構成する極性原子など、
束縛された荷電粒子のわずかな変位によって生じるため、束縛電荷とも呼ばれる。
</p>


<p>
自由電荷密度 $\rho_{\rm free}$ と分極電荷密度 $\rho_{\rm bound}$ 
を含む全電荷密度 $\rho$（$=\rho_{\rm free}+\rho_{\rm bound}$）
についてガウスの法則は次のように表される。
</p>

$$
\begin{align}
\nabla\cdot\mathbf{E}(\mathbf{r}) &= \frac{\rho(\mathbf{r})}{\epsilon_{0}}
= \frac{\rho\_{\rm free}(\mathbf{r})+\rho\_{\rm bound}(\mathbf{r})}{\epsilon\_{0}} \tag{1}
\end{align}
$$

<p>
一方、電束密度 $\mathbf{D}$ は次のように定義される。
</p>

$$
\begin{align}
\mathbf{D}(\mathbf{r}) &= \epsilon\_{0} \mathbf{E}(\mathbf{r}) + \mathbf{P}(\mathbf{r}) \tag{2}
\end{align}
$$

<p>
ここで電束密度 $\mathbf{D}$ の発散をとる。
</p>

$$
\begin{align}
\nabla_{\mathbf{r}}\cdot\mathbf{D}(\mathbf{r}) &= \epsilon\_{0} 
\nabla_{\mathbf{r}}\cdot\mathbf{E}(\mathbf{r}) + \nabla_{\mathbf{r}}\cdot\mathbf{P}(\mathbf{r}) \\\\
&= (\rho\_{\rm free}(\mathbf{r})+\rho\_{\rm bound}(\mathbf{r})) + \nabla_{\mathbf{r}}\cdot\mathbf{P}(\mathbf{r}) \tag{3}
\end{align}
$$

<p>
誘電体のガウスの法則 $\nabla_{\mathbf{r}}\cdot\mathbf{D}(\mathbf{r})=\rho_{\rm free}$ 
と式3より分極電荷密度の定義が得られる。
</p>

$$
\begin{align}
\rho_{\rm bound}(\mathbf{r}) &= - \nabla_{\mathbf{r}}\cdot\mathbf{P}(\mathbf{r}) \tag{4}
\end{align}
$$
