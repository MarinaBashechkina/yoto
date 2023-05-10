const tabItem=Array.from(document.querySelectorAll('.tab_item'))
const contentItem=Array.from(document.querySelectorAll('.tabs_block'))

const clearActiveClass=(element, className='tab_active')=>{
	element.find(item=> item.classList.remove(`${ className }`))
}
const setActiveClass=(element, index, className='tab_active')=>{
	element[index].classList.add(`${ className }`)
}
const checkoutTabs=(item, index)=>{
	item.addEventListener('click',()=>{
		
		if(item.classList.contains('tab_active')) return

		clearActiveClass(tabItem)
		clearActiveClass(contentItem)

		setActiveClass(tabItem,index)
		setActiveClass(contentItem, index)
	})
}
tabItem.forEach(checkoutTabs)
