#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const the_lambda_circuit_breaker_stack_1 = require("../lib/the-lambda-circuit-breaker-stack");
const app = new cdk.App();
new the_lambda_circuit_breaker_stack_1.TheLambdaCircuitBreakerStack(app, 'TheLambdaCircuitBreakerStack');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlLWxhbWJkYS1jaXJjdWl0LWJyZWFrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGUtbGFtYmRhLWNpcmN1aXQtYnJlYWtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLDhGQUF1RjtBQUV2RixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLCtEQUE0QixDQUFDLEdBQUcsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHsgVGhlTGFtYmRhQ2lyY3VpdEJyZWFrZXJTdGFjayB9IGZyb20gJy4uL2xpYi90aGUtbGFtYmRhLWNpcmN1aXQtYnJlYWtlci1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5uZXcgVGhlTGFtYmRhQ2lyY3VpdEJyZWFrZXJTdGFjayhhcHAsICdUaGVMYW1iZGFDaXJjdWl0QnJlYWtlclN0YWNrJyk7XG4iXX0=