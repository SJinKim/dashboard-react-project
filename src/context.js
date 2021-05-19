import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openDetails = () => {
    setIsDetailOpen(true)
  }
  const closeDetails = () => {
    setIsDetailOpen(false)
  }

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        openDetails,
        closeDetails,
        isDetailOpen,
        openSidebar,
        closeSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

/* 
if i need to fetch data through api

const useFetch = (url) => {
  setLoading(true)
  const getItem = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setProducts(data)
    setLoading(false)
  }
  useEffect(() => {
    getItem()
  }, [url])
  return { loading, products }
}
 */
export { AppContext, AppProvider }
