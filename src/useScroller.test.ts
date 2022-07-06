import { useScroller } from './useScroller'

test('should scroll to specified position', () => {
  const spy = jest.spyOn(window, 'scrollTo').mockImplementation()
  const scroll = useScroller({ x: 20, y: 10, isSmooth: true })

  if (!scroll) {
    throw 'Invalid window object  '
  }

  scroll()

  expect(spy).toBeCalledWith({
    left: 20,
    top: 10,
    behavior: 'smooth',
  })

  spy.mockRestore()
})
