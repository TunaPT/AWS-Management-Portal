import { OpenAPIObject, OperationObject, PathItemObject } from "openapi3-ts/oas31";
import { authenticationErrorResponse, badRequestResponse, notFoundRequestResponse, serverErrorResponse } from "./object-schemas";
import { generateSchema } from "@anatine/zod-openapi";
import { apiSchemas, SchemaID } from "@deisi25/types";


export function addResponseSchemas(openApiObject: OpenAPIObject): OpenAPIObject {

	const test = generateSchema(apiSchemas[SchemaID.ApiError]);
	console.log(`Testing shit: ${JSON.stringify(test)}`);

	const schemas = {};

	return {
		// components: {
		// 	schemas: ,
		// 	...openApiObject.components
		// },
		...openApiObject
	};
}

/**
 * Add 400 response (bad request) for all methods in a path if the 400 response is not already set.
 * @param pathItem path item
 * @returns Path item with 400 responses
 */
export function addBadRequestResponseToPathMethods(pathItem: PathItemObject): PathItemObject {
	const get: OperationObject | undefined = pathItem.get;
	const head: OperationObject | undefined = pathItem.head;
	const post: OperationObject | undefined = pathItem.post;
	const put: OperationObject | undefined = pathItem.put;
	const deletem: OperationObject | undefined = pathItem.delete;
	const options: OperationObject | undefined = pathItem.options;
	const trace: OperationObject | undefined = pathItem.trace;
	const patch: OperationObject | undefined = pathItem.patch;

	if (get) {
		get.responses['400'] = badRequestResponse;
	}

	if (head) {
		head.responses['400'] = badRequestResponse;
	}

	if (post) {
		post.responses['400'] = badRequestResponse;
	}

	if (put) {
		put.responses['400'] = badRequestResponse;
	}

	if (deletem) {
		deletem.responses['400'] = badRequestResponse;
	}

	if (options) {
		options.responses['400'] = badRequestResponse;
	}

	if (trace) {
		trace.responses['400'] = badRequestResponse;
	}

	if (patch) {
		patch.responses['400'] = badRequestResponse;
	}

	return {
		get: get,
		head: head,
		post: post,
		put: put,
		delete: deletem,
		options: options,
		trace: trace,
		patch: patch,
		...pathItem
	};
}

/**
 * Update 404 response (resource not found) to the correct schema for all methods in a path if the 404 response is set.
 * @param pathItem path item
 * @returns Path item with 404 responses
 */
export function updateResourceNotFoundRequestResponseToPathMethods(pathItem: PathItemObject): PathItemObject {
	const get: OperationObject | undefined = pathItem.get;
	const head: OperationObject | undefined = pathItem.head;
	const post: OperationObject | undefined = pathItem.post;
	const put: OperationObject | undefined = pathItem.put;
	const deletem: OperationObject | undefined = pathItem.delete;
	const options: OperationObject | undefined = pathItem.options;
	const trace: OperationObject | undefined = pathItem.trace;
	const patch: OperationObject | undefined = pathItem.patch;

	if (get && get.responses['404']) {
		get.responses['404'] = notFoundRequestResponse;
	}

	if (head && head.responses['404']) {
		head.responses['404'] = notFoundRequestResponse;
	}

	if (post && post.responses['404']) {
		post.responses['404'] = notFoundRequestResponse;
	}

	if (put && put.responses['404']) {
		put.responses['404'] = notFoundRequestResponse;
	}

	if (deletem && deletem.responses['404']) {
		deletem.responses['404'] = notFoundRequestResponse;
	}

	if (options && options.responses['404']) {
		options.responses['404'] = notFoundRequestResponse;
	}

	if (trace && trace.responses['404']) {
		trace.responses['404'] = notFoundRequestResponse;
	}

	if (patch && patch.responses['404']) {
		patch.responses['404'] = notFoundRequestResponse;
	}

	return {
		get: get,
		head: head,
		post: post,
		put: put,
		delete: deletem,
		options: options,
		trace: trace,
		patch: patch,
		...pathItem
	};
}

/**
 * Add 500 response (server error) for all methods in a path.
 * @param pathItem path item
 * @returns Path item with 500 responses
 */
export function addServerErrorResponseToPathMethods(pathItem: PathItemObject): PathItemObject {
	const get: OperationObject | undefined = pathItem.get;
	const head: OperationObject | undefined = pathItem.head;
	const post: OperationObject | undefined = pathItem.post;
	const put: OperationObject | undefined = pathItem.put;
	const deletem: OperationObject | undefined = pathItem.delete;
	const options: OperationObject | undefined = pathItem.options;
	const trace: OperationObject | undefined = pathItem.trace;
	const patch: OperationObject | undefined = pathItem.patch;

	if (get) {
		get.responses['500'] = serverErrorResponse;
	}

	if (head) {
		head.responses['500'] = serverErrorResponse;
	}

	if (post) {
		post.responses['500'] = serverErrorResponse;
	}

	if (put) {
		put.responses['500'] = serverErrorResponse;
	}

	if (deletem) {
		deletem.responses['500'] = serverErrorResponse;
	}

	if (options) {
		options.responses['500'] = serverErrorResponse;
	}

	if (trace) {
		trace.responses['500'] = serverErrorResponse;
	}

	if (patch) {
		patch.responses['500'] = serverErrorResponse;
	}

	return {
		get: get,
		head: head,
		post: post,
		put: put,
		delete: deletem,
		options: options,
		trace: trace,
		patch: patch,
		...pathItem
	};
}

/**
 * Add 401 response (authentication error) for all methods in a path.
 * @param pathItem path item
 * @returns Path item with 401 responses
 */
export function addAuthenticationErrorResponseToPathMethods(pathItem: PathItemObject): PathItemObject {
	const get: OperationObject | undefined = pathItem.get;
	const head: OperationObject | undefined = pathItem.head;
	const post: OperationObject | undefined = pathItem.post;
	const put: OperationObject | undefined = pathItem.put;
	const deletem: OperationObject | undefined = pathItem.delete;
	const options: OperationObject | undefined = pathItem.options;
	const trace: OperationObject | undefined = pathItem.trace;
	const patch: OperationObject | undefined = pathItem.patch;

	if (get) {
		get.responses['401'] = authenticationErrorResponse;
	}

	if (head) {
		head.responses['401'] = authenticationErrorResponse;
	}

	if (post) {
		post.responses['401'] = authenticationErrorResponse;
	}

	if (put) {
		put.responses['401'] = authenticationErrorResponse;
	}

	if (deletem) {
		deletem.responses['401'] = authenticationErrorResponse;
	}

	if (options) {
		options.responses['401'] = authenticationErrorResponse;
	}

	if (trace) {
		trace.responses['401'] = authenticationErrorResponse;
	}

	if (patch) {
		patch.responses['401'] = authenticationErrorResponse;
	}

	return {
		get: get,
		head: head,
		post: post,
		put: put,
		delete: deletem,
		options: options,
		trace: trace,
		patch: patch,
		...pathItem
	};
}

/**
 * Add security schema to all methods in a path.
 * @param pathItem path item
 * @returns Path with security schema set on all methods
 */
export function addSecuritySchemeToPathOptions(pathItem: PathItemObject): PathItemObject {
	const get: OperationObject | undefined = pathItem.get;
	const head: OperationObject | undefined = pathItem.head;
	const post: OperationObject | undefined = pathItem.post;
	const put: OperationObject | undefined = pathItem.put;
	const deletem: OperationObject | undefined = pathItem.delete;
	const options: OperationObject | undefined = pathItem.options;
	const trace: OperationObject | undefined = pathItem.trace;
	const patch: OperationObject | undefined = pathItem.patch;

	if (get) {
		get.security = [
			{
				cookieAuth: []
			}
		]
	}

	if (head) {
		head.security = [
			{
				cookieAuth: []
			}
		]
	}

	if (post) {
		post.security = [
			{
				cookieAuth: []
			}
		]
	}

	if (put) {
		put.security = [
			{
				cookieAuth: []
			}
		]
	}

	if (deletem) {
		deletem.security = [
			{
				cookieAuth: []
			}
		]
	}

	if (options) {
		options.security = [
			{
				cookieAuth: []
			}
		]
	}

	if (trace) {
		trace.security = [
			{
				cookieAuth: []
			}
		]
	}

	if (patch) {
		patch.security = [
			{
				cookieAuth: []
			}
		]
	}

	return {
		get: get,
		head: head,
		post: post,
		put: put,
		delete: deletem,
		options: options,
		trace: trace,
		patch: patch,
		...pathItem
	};
}
