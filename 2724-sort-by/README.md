<h2><a href="https://leetcode.com/problems/sort-by/">2724. Sort By</a></h2><h3>Easy</h3><hr><div><p>Given an array <code>arr</code> and a function <code>fn</code>, return a sorted array <code>sortedArr</code>. You can assume&nbsp;<code>fn</code>&nbsp;only returns numbers and those numbers determine the sort order of&nbsp;<code>sortedArr</code>. <code>sortedArr</code> must be sorted in <strong>ascending order</strong> by <code>fn</code> output.</p>

<p>You may assume that <code>fn</code> will never duplicate numbers for a given array.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> arr = [5, 4, 1, 2, 3], fn = (x) =&gt; x
<strong>Output:</strong> [1, 2, 3, 4, 5]
<strong>Explanation:</strong> fn simply returns the number passed to it so the array is sorted in ascending order.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) =&gt; d.x
<strong>Output:</strong> [{"x": -1}, {"x": 0}, {"x": 1}]
<strong>Explanation:</strong> fn returns the value for the "x" key. So the array is sorted based on that value.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> arr = [[3, 4], [5, 2], [10, 1]], fn = (x) =&gt; x[1]
<strong>Output:</strong> [[10, 1], [5, 2], [3, 4]]
<strong>Explanation:</strong> arr is sorted in ascending order by number at index=1.&nbsp;
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>arr</code> is a valid JSON array</li>
	<li><code>fn</code> is a function that returns a number</li>
	<li><code>1 &lt;=&nbsp;arr.length &lt;= 5 * 10<sup>5</sup></code></li>
</ul>

<h2>풀이 이해</h2>
<p>
  1. 함수는 숫자만 받기에 예외처리로 숫자가 아닌값이 함수의 인자로 들어올경우 조건문 반환 처리한다.</br>
  2. 함수는 배열에서 숫자가 중복이지 않기에 배열에서 중복값을 없애고 할당한다.</br>
  3. arr는 오름차순 정렬을 위해 sort를 오름차순으로 정의한다.
</p>
<p>
  시간복잡도 : 
	sortedArr으로 중복값을 제거하기 위해 배열을 순회하는 과정이 필요하기에 O(n)이지만, </br>
 	오름 차순 정렬로 인하여 시간복잡도는 nlogn으로 생각합니다. </br>
  공간복잡도 : 
  	중복값을 배열에서 제거 하기위해 배열의 공간을 추가로 증가하기에 O(n)으로 확인됩니다.
	
</p>

</div>
