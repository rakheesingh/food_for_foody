const { useEffect } = require("react/cjs/react.production.min");

function useOnScreen(element = window ){

    const checkElementOnScreen = () => {
      const axisOfElement = element.outerHeight
    }

    useEffect(() => {
      
      document.addEventListener('scroll', checkElementOnScreen);
      return () => {
        document.removeEventListener('scroll', checkElementOnScreen);

      }
    }, [])

}