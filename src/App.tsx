import { useState, useEffect, MouseEvent } from 'react'
import reactImage from './react.png'
import { AuroraHero } from './components/AnimatedBackground'

type Operator = '+' | '-' | '*' | '/'

function App() {
  const [display, setDisplay] = useState<string>('0')
  const [fontSize, setFontSize] = useState<number>(36)
  const [lastOperationWasEqual, setLastOperationWasEqual] = useState<boolean>(false)
  const [shakeError, setShakeError] = useState<boolean>(false)
  const [key, setKey] = useState<number>(0)
  const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    setFontSize(Math.min(36, 530 / display.length))
    setKey((prevKey) => prevKey + 1)
    setAnimate(true)
  }, [display])

  const handleNumber = (event: MouseEvent<HTMLDivElement>) => {
    const number = event.currentTarget.textContent || ''
    if (lastOperationWasEqual || display === '0') {
      setDisplay(number)
    } else {
      setDisplay((prevDisplay) => prevDisplay + number)
    }
    setLastOperationWasEqual(false)
  }

  const renderDisplay = () => {
    return (
      <div
        id="display"
        className={`col-span-4 bg-primary text-white text-right overflow-hidden whitespace-nowrap h-[90px] flex items-center justify-end px-10 ${
          shakeError ? 'animate-shake' : ''
        }`}
        style={{ fontSize: `${fontSize}px` }}
        key={key}
      >
        {display.split('').map((char, index) => (
          <span key={index} className="inline-block animate-pop">
            {char}
          </span>
        ))}
      </div>
    )
  }

  const handleOperator = (event: MouseEvent<HTMLDivElement>) => {
    const operator = event.currentTarget.textContent as Operator

    if (lastOperationWasEqual) {
      setDisplay(display + ' ' + operator + ' ')
      setLastOperationWasEqual(false)
      return
    }

    const operators: Operator[] = ['+', '-', '*', '/']
    if (operators.includes(display.slice(-2, -1) as Operator)) {
      if (operator === '-' && display.slice(-2, -1) !== '-') {
        setDisplay(display + operator)
      } else {
        setDisplay(display.slice(0, -2) + ' ' + operator + ' ')
      }
    } else {
      setDisplay(display + ' ' + operator + ' ')
    }
  }

  const sanitizeExpression = (str: string): string => {
    const tokens = str.split(' ')
    const processedTokens: string[] = []

    for (let i = 0; i < tokens.length; i++) {
      const operators: Operator[] = ['+', '-', '*', '/']
      if (operators.includes(tokens[i] as Operator)) {
        if (tokens[i + 1] === '-' && !operators.includes(tokens[i + 2] as Operator)) {
          processedTokens.push(tokens[i])
          processedTokens.push(tokens[i + 1] + tokens[i + 2])
          i += 2
          continue
        } else {
          processedTokens.push(tokens[i])
        }
      } else {
        processedTokens.push(tokens[i])
      }
    }

    return processedTokens.join(' ')
  }

  const safeEvaluate = (expression: string): number => {
    const sanitized = expression.replace(/[^0-9+\-*/.() ]/g, '')
    return Function(`'use strict'; return (${sanitized})`)() as number
  }

  const handleEqual = () => {
    try {
      const sanitizedExpression = sanitizeExpression(display)
      const result = safeEvaluate(sanitizedExpression.replace(/\s+/g, ''))
      setDisplay(parseFloat(result.toFixed(4)).toString())
      setLastOperationWasEqual(true)
    } catch {
      setShakeError(true)
      setDisplay('Error')
      setTimeout(() => setShakeError(false), 500)
    }
  }

  const handleDecimal = () => {
    const array = display.split(' ')
    const lastElement = array[array.length - 1]

    if (!lastElement.includes('.') && !isNaN(parseInt(lastElement))) {
      setDisplay(display + '.')
    }
  }

  const handleClear = () => {
    setDisplay('0')
  }

  const handleAnimation = (event: MouseEvent<HTMLDivElement>) => {
    const button = event.currentTarget
    button.classList.add('animate-button-click')

    setTimeout(() => {
      button.classList.remove('animate-button-click')
    }, 600)
  }

  const buttonClass =
    'p-10 text-2xl font-bold cursor-pointer hover:opacity-80 active:scale-95 transition-all select-none'
  const numberClass = `${buttonClass} bg-white text-black`
  const operatorClass = `${buttonClass} bg-white text-primary`
  const clearClass = `${buttonClass} bg-white text-black col-span-4 text-center`
  const equalsClass = `${buttonClass} bg-primary text-white`

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <AuroraHero />
      </div>
      <div className="flex flex-col items-center pt-12">
        <div className="flex justify-center mb-2">
          <img
            src={reactImage}
            alt="React Logo"
            className={`h-[120px] ${animate ? 'animate-fall-in' : ''}`}
          />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 text-2xl bg-white text-black shadow-2xl rounded-lg overflow-hidden max-w-md">
            {renderDisplay()}
            <div
              id="clear"
              className={clearClass}
              onClick={(e) => {
                handleClear()
                handleAnimation(e)
              }}
            >
              AC
            </div>
            <div
              id="seven"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              7
            </div>
            <div
              id="eight"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              8
            </div>
            <div
              id="nine"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              9
            </div>
            <div
              id="multiply"
              className={operatorClass}
              onClick={(e) => {
                handleOperator(e)
                handleAnimation(e)
              }}
            >
              *
            </div>
            <div
              id="four"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              4
            </div>
            <div
              id="five"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              5
            </div>
            <div
              id="six"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              6
            </div>
            <div
              id="divide"
              className={operatorClass}
              onClick={(e) => {
                handleOperator(e)
                handleAnimation(e)
              }}
            >
              /
            </div>
            <div
              id="one"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              1
            </div>
            <div
              id="two"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              2
            </div>
            <div
              id="three"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              3
            </div>
            <div
              id="add"
              className={operatorClass}
              onClick={(e) => {
                handleOperator(e)
                handleAnimation(e)
              }}
            >
              +
            </div>
            <div
              id="zero"
              className={numberClass}
              onClick={(e) => {
                handleNumber(e)
                handleAnimation(e)
              }}
            >
              0
            </div>
            <div
              id="decimal"
              className={numberClass}
              onClick={(e) => {
                handleDecimal()
                handleAnimation(e)
              }}
            >
              .
            </div>
            <div
              id="equals"
              className={equalsClass}
              onClick={(e) => {
                handleEqual()
                handleAnimation(e)
              }}
            >
              =
            </div>
            <div
              id="subtract"
              className={operatorClass}
              onClick={(e) => {
                handleOperator(e)
                handleAnimation(e)
              }}
            >
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
