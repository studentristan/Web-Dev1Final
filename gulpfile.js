function defaultTask(cb) {
  // this is where the code for the default task goes...
  // I didn't play around with gulp too much because the converter I like to use for SCSS uglifies the css for me,
  // and I tend to like to leave the HTML as is unless actually producing the site for someone else, in which case 
  // I'll use a one-time converter. 
  cb();
}

exports.default = defaultTask
