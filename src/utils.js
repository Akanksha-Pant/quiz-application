export function createQuestionFormPayload(quizId) {
  const form = document.querySelector('#question-form')
  const formData = new FormData(form)
  const formProps = Object.fromEntries(formData)
  const { description, title, totalOptions, correctOption, points } = formProps
  console.log(formProps)
  const options = []
  for (let optionIndex = 0; optionIndex < totalOptions; optionIndex++) {
    options.push(formProps[`option-${optionIndex}`])
  }

  return {
    options,
    description,
    title,
    totalOptions,
    quizId,
    correctOption,
    points,
  }
}

export function calculateQuizScore(quizResponse) {
  let score = 0
  Object.keys(quizResponse).forEach((element) => {
    const data = quizResponse[element]
    if (data.correctOption === data.value) {
      score += parseInt(data.points)
    }
  })

  return { score, quizResponse }
}
