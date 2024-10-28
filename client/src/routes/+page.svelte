<script lang="ts">
	import type { PageData } from './$types';
	import Carousel from '$lib/components/Carousel.svelte';

	import PageHead from '$lib/components/PageHead.svelte';
	// import Article from '$lib/components/Article.svelte';
	// import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	// import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	// import ArticleDescription from '$lib/components/ArticleDescription.svelte';
	import { LL } from '../i18n/i18n-svelte';
	export let data: PageData;
	import imageUrl1 from '../assets/1.svg';
	import imageUrl2 from '../assets/2.svg';
	import imageUrl3 from '../assets/3.svg';
	import imageUrl4 from '../assets/4.svg';
	import imageUrl5 from '../assets/5.svg';
	import imageUrl6 from '../assets/6.svg';
	import Hash from '../assets/hash.svg';

	let cards = data.posts.map((x) => [{ id: x, title: x.title, description: x.description }]);
</script>

<PageHead title="Home" description="An awesome blog about development with Svelte" />
<br /><br />

<!-- <center>
	<p><i>{$LL.ARTICLE_1()}</i></p>
	<strong> {$LL.TOP_TITLE()} </strong>
</center> -->
<Carousel {data} />

<center>
	<p><i>{$LL.ARISTOTELE_1()}</i></p>
	<i>{$LL.ARISTOTELE_NAME()}</i>
</center>
<div class="slogan">HUMAN RIGHTS DECLARATION</div>
<br /><br />
<details>
	<summary>{$LL.INTRO().substring(0, 232)}...</summary>
	<p>{$LL.INTRO()}</p>
</details>
<br /><br />

<h2>
	{$LL.ARTICLE_TITLE()} <span>1.</span><img class="hash" src={Hash} alt="Peace" />dignity
	<img class="hash" src={Hash} alt="Peace" />equalrights
	<img class="hash" src={Hash} alt="Peace" />brotherhoodspirit
</h2>
<p>{$LL.ARTICLE_1()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>2.</span><img class="hash" src={Hash} alt="Peace" />basicliferight
</h2>
<p>{$LL.ARTICLE_2()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>3.</span><img class="hash" src={Hash} alt="Peace" />poplequlity
	<img class="hash" src={Hash} alt="Peace" />embracedifference
	<img class="hash" src={Hash} alt="Peace" />sovereigntyjustice
</h2>
<p>{$LL.ARTICLE_3()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>4.</span><img class="hash" src={Hash} alt="Peace" />slaveryalert
</h2>
<p>{$LL.ARTICLE_4()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>5.</span><img class="hash" src={Hash} alt="Peace" />torturealert
</h2>
<p>{$LL.ARTICLE_5()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>6.</span><img class="hash" src={Hash} alt="Peace" />tobeperson
</h2>
<p>{$LL.ARTICLE_6()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>7.</span><img class="hash" src={Hash} alt="Peace" />lawequality
	<img class="hash" src={Hash} alt="Peace" />discriminationprotection
</h2>
<p>{$LL.ARTICLE_7()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>8.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>fundamentalrightsprotection
</h2>
<p>{$LL.ARTICLE_8()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>9.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>notoarbitraryarrest
</h2>
<p>{$LL.ARTICLE_9()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>10.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>tribunalequality<img class="hash" src={Hash} alt="Peace" />independent
</h2>
<p>{$LL.ARTICLE_10()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>11.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>innocencepresumption
	<img class="hash" src={Hash} alt="Peace" />minimalarrestpenalty
</h2>
<p>{$LL.ARTICLE_11()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>12.</span><img class="hash" src={Hash} alt="Peace" />privacy
	<img class="hash" src={Hash} alt="Peace" />correspondetionprivacy
</h2>
<p>{$LL.ARTICLE_12()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>13.</span><img class="hash" src={Hash} alt="Peace" />fredomofmovemnt
</h2>
<p>{$LL.ARTICLE_13()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>14.</span><img class="hash" src={Hash} alt="Peace" />asylumright
</h2>
<p>{$LL.ARTICLE_14()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>15.</span><img class="hash" src={Hash} alt="Peace" />nationalityright
</h2>
<p>{$LL.ARTICLE_15()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>16.</span> <img class="hash" src={Hash} alt="Peace" />marrigeright
</h2>
<p>{$LL.ARTICLE_16()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>17.</span> <img class="hash" src={Hash} alt="Peace" />humanityright
</h2>
<p>{$LL.ARTICLE_17()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>18.</span><img class="hash" src={Hash} alt="Peace" />freedomofthought
	<img class="hash" src={Hash} alt="Peace" />freedomofconscience
	<img class="hash" src={Hash} alt="Peace" />freedomofreligion
</h2>
<p>{$LL.ARTICLE_18()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>19.</span><img class="hash" src={Hash} alt="Peace" />freedomofopinio
	<img class="hash" src={Hash} alt="Peace" />opinionexpresion
</h2>
<p>{$LL.ARTICLE_19()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>20.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>associationfreedom
</h2>
<p>{$LL.ARTICLE_20()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>21.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>governanceparticipation
	<img class="hash" src={Hash} alt="Peace" />publicservices
</h2>
<p>{$LL.ARTICLE_21()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>22.</span><img class="hash" src={Hash} alt="Peace" />socialservices
	<img class="hash" src={Hash} alt="Peace" />culturalrights
</h2>
<p>{$LL.ARTICLE_22()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>23.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>freedomofemployment
	<img class="hash" src={Hash} alt="Peace" />salaryequality
</h2>
<p>{$LL.ARTICLE_23()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>24.</span><img class="hash" src={Hash} alt="Peace" />restandleisure
</h2>
<p>{$LL.ARTICLE_24()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>25.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>difficultcircumstances
</h2>
<p>{$LL.ARTICLE_25()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>26.</span><img class="hash" src={Hash} alt="Peace" />educationright
</h2>
<p>{$LL.ARTICLE_26()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>27.</span><img class="hash" src={Hash} alt="Peace" />culturalrights
</h2>
<p>{$LL.ARTICLE_27()}</p>

<h2>{$LL.ARTICLE_TITLE()} <span>28.</span><img class="hash" src={Hash} alt="Peace" />sociallife</h2>
<p>{$LL.ARTICLE_28()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>29.</span><img class="hash" src={Hash} alt="Peace" />societyduties
	<img class="hash" src={Hash} alt="Peace" />moral
	<img class="hash" src={Hash} alt="Peace" />respect
</h2>
<p>{$LL.ARTICLE_29()}</p>

<h2>
	{$LL.ARTICLE_TITLE()} <span>30.</span><img
		class="hash"
		src={Hash}
		alt="Peace"
	/>declarationstability
</h2>
<p>{$LL.ARTICLE_30()}</p>

<br /><br /><br />
<br />

<center>
	<p><i>{$LL.ARISTOTELE_2()}</i></p>
	<i>{$LL.ARISTOTELE_NAME()}</i>
</center>

<img class="imageUrl1" src={imageUrl1} alt="Peace" />
<img class="imageUrl2" src={imageUrl2} alt="Peace" />
<img class="imageUrl3" src={imageUrl3} alt="Peace" />
<img class="imageUrl5" src={imageUrl5} alt="Peace" />
<img class="imageUrl6" src={imageUrl6} alt="Peace" />

<slot />

<style>
	.hash {
		width: 21px;
		height: 21px;
	}
	i {
		font-size: 0.8rem;
	}

	h2 {
		font-size: 18px;
		position: relative;
	}

	span {
		position: absolute;
		top: -10px;
		left: -60px;
		font-size: 40px;
		opacity: 0.2;
		min-width: 60px;
		text-align: right;
	}

	.imageUrl1 {
		position: fixed;
		bottom: 20%;
		opacity: 0.071;
		z-index: -1;
		right: 0;
		width: 20vw;
	}
	.imageUrl2 {
		position: fixed;
		top: 20%;
		opacity: 0.071;
		z-index: -1;
		right: 22vw;
		width: 20vw;
	}

	.imageUrl3 {
		position: fixed;
		top: 20%;
		opacity: 0.071;
		z-index: -1;
		left: 0;
		top: 0;
		width: 20vw;
	}
	.imageUrl5 {
		position: fixed;
		opacity: 0.071;
		z-index: -1;
		width: 20vw;
		right: -5vw;
		top: -5vw;
	}

	.imageUrl6 {
		position: fixed;
		opacity: 0.071;
		z-index: -1;
		width: 20vw;
		left: 10vw;
		bottom: 5vw;
	}

	details {
		cursor: pointer;
	}

	.slogan {
		position: fixed;
		left: -30rem;
		top: 300px;
		width: 100%;
		rotate: 270deg;
		font-size: 2rem;
		font-weight: 700;
		font-style: italic;
		color: #010101;
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
</style>
