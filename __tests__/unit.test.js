// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//email
test ('valid email 1',()=>{
  expect(isEmail('ddd@ucsd.edu')).toBe(true);
})
test ('valid email 2',()=>{
  expect(isEmail('aaa@ucsd.edu')).toBe(true);
})

test ('invalid email 1',()=>{
  expect(isEmail('ddd@ucsdedu')).toBe(false);
})
test ('invalid email 2',()=>{
  expect(isEmail('aaa@ucsd..edu')).toBe(false);
})

//phone
test ('valid phone 1',()=>{
  expect(isPhoneNumber('626-555-5555')).toBe(true);
})
test ('valid phone 2',()=>{
  expect(isPhoneNumber('575-555-5555')).toBe(true);
})

test ('invalid phone 1',()=>{
  expect(isPhoneNumber('5559892325555')).toBe(false);
})
test ('invalid phone 2',()=>{
  expect(isPhoneNumber('6265555555')).toBe(false);
})

//Strong password
test ('valid strong password 1',()=>{
  expect(isStrongPassword('G123321')).toBe(true);
})
