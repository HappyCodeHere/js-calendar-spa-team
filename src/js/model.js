const event = {
  id: 38430, // Number
  title: 'My important event', // String
  description: 'Some description', // String
  date: '2017_07_02', // String or maybe date number
  status: 'undone', // String
  comments: [comment, comment, comment] // Array
}

const comment = {
  date: 1383238203, // Number
  text: 'Should be done first', // String
  // event ID ?
  eventId: 38430, // Number
}
