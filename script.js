const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = document.querySelectorAll(".prices") 
	let sum = 0
	for (let i of price) {
		sum+=price[i]
	}
	
	let tot = `<tr>
      <td class="item">Total</td>
      <td class="price">${sum}</td>
    </tr>`;
	const total = document.createElement(tot);
	document.table.appendChild(total);
	
  
};

getSumBtn.addEventListener("click", getSum);

