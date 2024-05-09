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
test ('valid strong password 2',()=>{
  expect(isStrongPassword('JJJ123321')).toBe(true);
})
test ('invalid strong password 1',()=>{
  expect(isStrongPassword('123321')).toBe(false);
})
test ('invalid strong password 2',()=>{
  expect(isStrongPassword('123G321')).toBe(false);
})

//date

test ('valid date 1',()=>{
  expect(isDate('01/01/2003')).toBe(true);
})

test ('valid date 2',()=>{
  expect(isDate('01/23/1987')).toBe(true);
})

test ('invalid date 1',()=>{
  expect(isDate('233/23/1987')).toBe(false);
})

test ('invalid date 2',()=>{
  expect(isDate('01231987')).toBe(false);
})

//is hex color

test ('valid hex color 1',()=>{
  expect(isHexColor('#03fca9')).toBe(true);
})

test ('valid hex color 2',()=>{
  expect(isHexColor('#03b5fc')).toBe(true);
})

test ('invalid hex color 1',()=>{
  expect(isHexColor('0')).toBe(false);
})

test ('invalid hex color 2',()=>{
  expect(isHexColor('#03fc')).toBe(false);
})