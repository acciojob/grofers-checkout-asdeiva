const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const nodeList = document.querySelectorAll(".price");
const table = document.querySelector('table')
console.log(nodeList);
let sum = 0;
            
for(var i = 0; i < nodeList.length; i++)
{
	sum += parseInt(nodeList[i].innerHTML) ;
	console.log(nodeList[i].innerHTML);
	
}
const totalRow = document.createElement("tr");
totalRow.innerHTML = `<tr>
<td class="item">Total</td>
<td class="price">${sum}</td>
</tr>`;
table.appendChild(totalRow);
console.log(sum);

	  
};

getSumBtn.addEventListener("click", getSum);

