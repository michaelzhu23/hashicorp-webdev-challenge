/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import s from './style.module.css'
import Image from 'next/image'
import searchIcon from './img/search-icon.svg'

export interface SearchProps {
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	onProfileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({
	onInputChange,
	onProfileChange,
}: SearchProps) {
	return (
		<>
			<div className={s.searchContainer}>
				<Image
					priority
					width={20}
					height={20}
					src={searchIcon}
					alt={'Search icon'}
				/>
				<input
					className={s.searchInput}
					type="text"
					placeholder="Search people by name"
					onChange={onInputChange}
				/>
			</div>

			<div className={s.hideProfileContainer}>
				<input
					type="checkbox"
					className={s.hideProfileCheckbox}
					onChange={onProfileChange}
				/>
				<div className={s.hideProfileLabel}>
					Hide people missing a profile image
				</div>
			</div>
		</>
	)
}
