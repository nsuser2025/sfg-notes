### 分極の定義

<p>
分極 $\mathbf{P}$ は単位体積あたりの電気双極子モーメントの平均として定義される。
永久双極子モーメントをもつ分子は、電場が印加されるとその向きがそろう（配向する）ことで平均双極子モーメントが変化し、分極に寄与する。
さらに、電場によって原子や分子を構成する電子・原子核・イオンの位置がわずかに変位し、誘起双極子モーメントも生じる。
$\mathbf{P}$ には、これら永久双極子の配向による寄与と誘起双極子による寄与の両方が含まれる。
</p>

$$
\begin{align}
{\bf P} &= \frac{\sum_{i}{\bf p}\_{i}}{V}  \tag{1} \\\\
\end{align}
$$

$\mathbf{p}_{i}$: 分子$i$の双極子モーメント　
$\Delta V$: 単位体積

### 分極ベクトルと分極電荷密度

<p>
電場を印加すると正電荷と負電荷に偏りが生じ、電気双極子モーメントが発生する。分極とは単位体積あたりの電気双極子モーメントとして定義される。
分極を引き起こす電荷は原子・分子に束縛されていた電子とイオンであるため、それらの偏りによって生じた電荷密度である分極電荷密度は束縛電荷密度とも呼ばれる。
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
