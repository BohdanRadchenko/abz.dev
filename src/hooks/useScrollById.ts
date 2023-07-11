export const useScrollById = (blockId: string, options?: ScrollIntoViewOptions) => {

  const scrollTo = () => {
    if ( !blockId ) return;
    const element = document.getElementById(blockId)
    if ( !element ) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start', ...options })
  }

  return scrollTo;
}
