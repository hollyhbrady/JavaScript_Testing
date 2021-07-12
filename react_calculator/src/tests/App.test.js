import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should be able to add', () => {
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('add');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('5');
  })

  it('should be able to subtract', () => {
    const button4 = container.getByTestId('number4');
    const subtract = container.getByTestId('subtract');
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(subtract);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should be able to multiply', () => {
    const button3 = container.getByTestId('number3');
    const multiply = container.getByTestId('multiply');
    const button5 = container.getByTestId('number5');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('15');
  })

  it('should be able to divide', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divide = container.getByTestId('divide');
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('3');
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const button3 = container.getByTestId('number3');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    fireEvent.click(button3);
    expect(runningTotal).toHaveTextContent('2173');
  })

  it('should be able to chain multiple operations together', () => {
    const button4 = container.getByTestId('number4');
    const subtract = container.getByTestId('subtract');
    const button7 = container.getByTestId('number7');
    const multiply = container.getByTestId('multiply');
    const button2 = container.getByTestId('number2');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(subtract);
    fireEvent.click(button7);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('14');
  })

  it('should be able to clear running total without affecting the calculation', () => {
    const button4 = container.getByTestId('number4');
    const subtract = container.getByTestId('subtract');
    const button7 = container.getByTestId('number7');
    const multiply = container.getByTestId('multiply');
    const button2 = container.getByTestId('number2');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear')
    fireEvent.click(button4);
    fireEvent.click(subtract);
    fireEvent.click(button7);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    fireEvent.click(clear);
    expect(runningTotal).toHaveTextContent('0');
  })

})

