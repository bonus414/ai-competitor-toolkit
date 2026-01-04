#!/usr/bin/env node

const CompetitorResearcher = require('./competitor-research');
const path = require('path');

async function researchSingleCompetitor(competitorName, url) {
  console.log(`🔍 Researching: ${competitorName}`);
  console.log(`🌐 URL: ${url}\n`);
  
  const researcher = new CompetitorResearcher();
  
  try {
    await researcher.initialize();
    
    const researchData = await researcher.researchCompetitor(competitorName, url);
    const reportPath = await researcher.generateReport(researchData);
    
    console.log(`\n✅ Research completed!`);
    console.log(`📄 Report: ${reportPath}`);
    console.log(`📸 Screenshots: ${researchData.screenshots.length} captured`);
    
    if (researchData.error) {
      console.log(`⚠️  Errors: ${researchData.error}`);
    }
    
  } catch (error) {
    console.error('❌ Fatal error:', error);
  } finally {
    await researcher.close();
  }
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log(`
Usage: node research-competitor.js <competitor-name> <url>

Examples:
  node research-competitor.js "OpenAI" "https://openai.com"
  node research-competitor.js "Anthropic" "https://anthropic.com"
  node research-competitor.js "Cohere" "https://cohere.com"
`);
  process.exit(1);
}

const competitorName = args[0];
const url = args[1];

// Validate URL
try {
  new URL(url);
} catch (error) {
  console.error('❌ Invalid URL provided');
  process.exit(1);
}

researchSingleCompetitor(competitorName, url).catch(console.error);
