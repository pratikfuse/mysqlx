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
import { IOperationResult, ITable, ITableUpdate } from './interfaces'

export class TableUpdate implements ITableUpdate {
	private readonly table: ITable
	private xTableUpdate: any

	constructor(table: ITable, xTableUpdate: any) {
		this.table = table
		this.xTableUpdate = xTableUpdate
	}

	public set(field: string, value: any): ITableUpdate {
		try {
			this.xTableUpdate = this.xTableUpdate.set(field, value)
			return this
		} catch (error) {
			throw error
		}
	}

	public async execute(): Promise<IOperationResult> {
		try {
			const xResult = await this.xTableUpdate.execute()
			return new OperationResult(xResult)
		} catch (error) {
			throw error
		}
	}
}

export default TableUpdate
