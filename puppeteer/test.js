const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	try{
		await page.goto('https://8081-fdfdafbddabcbccecbdfddaceadedfa.examlyiopb.examly.io');
		await page.setViewport({
		width:1200,
		height:800,
		})
		
		await page.waitForSelector('#inputName', {timeout : 1500});
		await page.waitForSelector('#inputComment', {timeout : 1500});
		await page.waitForSelector('#submitButton', {timeout : 1500});
		
		console.log('TESTCASE:test_case1:success');
	}
	 catch(e){
		console.log('TESTCASE:test_case1:failure');
	}finally{
	  await page.close();
	  await browser.close();
	}

})();

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
try{
	await page.goto('https://8081-fdfdafbddabcbccecbdfddaceadedfa.examlyiopb.examly.io');
	await page.setViewport({
	width:1200,
	height:800,
	})
	
	await page.type('#inputName','user1');
	await page.type('#inputName','Neo.ai emphasized my coding knowledge.');
	await page.click('#submitButton');
	await page.waitForSelector('#user1', {timeout : 1500});
	console.log('TESTCASE:test_case2:success');
}
 catch(e){
	console.log('TESTCASE:test_case2:failure');
}finally{
  await page.close();
  await browser.close();
}

})();
(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
try{
	await page.goto('https://8081-fdfdafbddabcbccecbdfddaceadedfa.examlyiopb.examly.io');
	await page.setViewport({
	width:1200,
	height:800,
	})
	
	await page.type('#inputName','user1');
	await page.type('#inputName','Neo.ai emphasized my coding knowledge.');
	await page.click('#submitButton');
	await page.type('#inputName','user2');
	await page.type('#inputName','Exam.ly emphasized my coding knowledge.');
	await page.click('#submitButton');
	await page.waitForSelector('#user1', {timeout : 1500});
	
	console.log('TESTCASE:test_case3:success');
}
 catch(e){
	console.log('TESTCASE:test_case3:failure');
}finally{
  await page.close();
  await browser.close();
}

})();
(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
try{
	await page.goto('https://8081-fdfdafbddabcbccecbdfddaceadedfa.examlyiopb.examly.io');
	await page.setViewport({
	width:1200,
	height:800,
	})
	
	await page.type('#inputName','user1');
	await page.type('#inputName','Neo.ai emphasized my coding knowledge.');
	await page.click('#submitButton');
	await page.type('#inputName','user2');
	await page.type('#inputName','Exam.ly emphasized my coding knowledge.');
	await page.click('#submitButton');
	await page.waitForSelector('#user2', {timeout : 1500});
	
	console.log('TESTCASE:test_case4:success');
}
 catch(e){
	console.log('TESTCASE:test_case4:failure');
}finally{
  await page.close();
  await browser.close();
}
})();
(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
try{
	await page.goto('https://8081-fdfdafbddabcbccecbdfddaceadedfa.examlyiopb.examly.io');
	await page.setViewport({
	width:1200,
	height:800,
	})
	
	await page.type('#inputName','user1');
	await page.type('#inputName','Neo.ai emphasized my coding knowledge.');
	await page.click('#submitButton');
	await page.type('#inputName','user2');
	await page.type('#inputName','Exam.ly emphasized my coding knowledge.');
	await page.click('#submitButton');
	await page.type('#inputName','user3');
	await page.type('#inputName','We love Examly');
	await page.click('#submitButton');
	await page.waitForSelector('#user1', {timeout : 1500});
	await page.waitForSelector('#user2', {timeout : 1500});
	await page.waitForSelector('#user3', {timeout : 1500});
	
	console.log('TESTCASE:test_case5:success');
}
 catch(e){
	console.log('TESTCASE:test_case5:failure');
}finally{
  await page.close();
  await browser.close();
}
})();