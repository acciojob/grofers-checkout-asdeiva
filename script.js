const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const nodeList = document.querySelectorAll(".price");
const body = document.querySelector('body')
console.log(nodeList);
let sum = 0;
            
for(var i = 0; i < nodeList.length; i++)
{
	sum += parseInt(nodeList[i].innerHTML) ;
	console.log(nodeList[i].innerHTML);
	
}
const ans = document.createElement("p");
ans.setAttribute("id", "ans");
ans.innerHTML = `Total:${sum}`;
document.body.appendChild(ans);
console.log(sum);

	  
};

getSumBtn.addEventListener("click", getSum);

