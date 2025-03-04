
export const PaginationNumbers = { 
  childExtend:{
    extend:'Flex',
    props: {
      flow: 'x',
      gap: '10px',
      
    },
  },
  $paginationNumbers: (el, s) => {
    const prodPerPage = s.productsAmountPerPage.amount
    const allProducts = Object.values(s.rawData.data).length
    const totalPages = Math.ceil(allProducts / prodPerPage)
    
    let pagination = []
    for(let i = 1; i <= totalPages; i++) {
      pagination.push({
        a: {
          text: i.toString(),
          attr: {
            href: `?page=${i}`
          },
          props: {
            textDecoration: 'none',
            color: 'zebraInTheNight'
          }
        }
      })
    }
    return pagination
  }
}