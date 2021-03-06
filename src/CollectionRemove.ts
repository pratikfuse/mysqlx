/**
 * Copyright 2019, Danang Galuh Tegar Prasetyo.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import OperationResult from './OperationResult'
import { ICollection, ICollectionRemove, IOperationResult } from './interfaces'

export class CollectionRemove implements ICollectionRemove {
	private readonly collection: ICollection
	private xCollectionRemove: any

	constructor(collection: ICollection, xCollectionRemove: any) {
		this.collection = collection
		this.xCollectionRemove = xCollectionRemove
	}

	public async execute(): Promise<IOperationResult> {
		try {
			const xResult = await this.xCollectionRemove.execute()
			return new OperationResult(xResult)
		} catch (error) {
			throw error
		}
	}
}

export default CollectionRemove
