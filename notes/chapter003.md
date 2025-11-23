### 均一なバルク系で$\chi^{(2)}$は消失する

<p>
分極$\mathbf{P}$は、バルクでは単位体積あたりの電気双極子モーメントの平均として、
界面では単位面積あたりの電気双極子モーメントの平均（表面分極）として定義される。
</p>

$$
\begin{align}
{\bf P}\_{\rm bulk} &= \frac{\sum_{i}{\bf p}\_{i}}{V}  \tag{1} \\\\
{\bf P}\_{\rm surf} &= \frac{\sum_{i}{\bf p}\_{i}}{A}  \tag{2}
\end{align}
$$

<p>
物質に電場を印加すると、永久分極（自発双極子）$\mathbf{P}_{\rm perm}$に加えて、
電場による誘起分極 $\mathbf{P}_{\rm ind}$ が生じ、全分極はその和として記述される。
$\mathbf{P}_{\rm ind}$は式(4)のように展開できる。
</p>

$$
\begin{align}
\mathbf{P} &= \mathbf{P}\_{\rm perm} + \mathbf{P}\_{\rm ind} \tag{3} \\\\
\mathbf{P}\_{\rm ind} &= \varepsilon_0 \left( \chi^{(1)} \mathbf{E} + \chi^{(2)}:\mathbf{E}\mathbf{E} + \chi^{(3)}:\mathbf{E}\mathbf{E}\mathbf{E} + \cdots \right) \tag{4}
\end{align}
$$

<p>
SFG分光で用いられる高強度レーザー電場のもとでは、線形感受率 $\chi^{(1)}$ のみでは
誘起分極を十分に記述できず、特に二次の非線形感受率 $\chi^{(2)}$ の寄与が重要となる。
この $\chi^{(2)}$ が中心対称なバルク系ではゼロになる。
</p>

### 証明
<p>
反転操作 $\mathbf{r} \rightarrow -\mathbf{r}$ に対して${\mathbf{P}}_{\rm ind}$
の2次の項は次の様に変換される
（均一なバルク系では非線形感受率は座標に依存しない点に注意）。
</p>

$$
\begin{align}
\mathbf{P}\_{\rm ind}^{(2)}(-\mathbf{r}) &= {\chi}^{(2)}:\mathbf{E}(-\mathbf{r})\mathbf{E}(-\mathbf{r}) \\\\
&= {\chi}^{(2)}:(-\mathbf{E}(\mathbf{r}))(-\mathbf{E}(\mathbf{r})) = {\chi}^{(2)}:\mathbf{E}(\mathbf{r})\mathbf{E}(\mathbf{r}) \tag{5} 
\end{align}
$$

<p>
中心対称なバルク系では反転操作に対して分極が反対称 $\mathbf{P}(-\mathbf{r})=-\mathbf{P}(\mathbf{r})$ 
であることが要求される。従って、$\chi^{(2)}=-\chi^{(2)}$ を満たのは $\chi^{(2)}=0$ のときだけである。
</p>
