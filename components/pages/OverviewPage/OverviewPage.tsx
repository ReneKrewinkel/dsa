import { View, Text } from 'react-native'
import { OverviewPageInterface } from './OverviewPage.interface'
import OverviewPageStyle from './OverviewPage.style'
import {TabBar} from '@/components/molecules'
import { useState } from 'react'
import {General, Material, History} from '@/components/organisms'

const OverviewPage = ({testID, style, type, size, props }:OverviewPageInterface) => {

    const [selectedTab, setlectedTab] = useState('Algemeen')

    const tabBarContent = [
        { label: 'Algemeen', icon: 'home-variant', action: () => setlectedTab('Algemeen') },
        { label: 'Materialen', icon: 'hammer-wrench', action: () => setlectedTab('Materialen') },
        { label: 'History', icon: 'history', action: () => setlectedTab('History') },

    ]

    return(
        <View testID={ testID }
              style={ OverviewPageStyle.View }>
            {/*@ts-ignore*/}
            <TabBar content={tabBarContent} active={selectedTab}/>
            { selectedTab === 'Algemeen' && <General /> }
            { selectedTab === 'Materialen' && <Material /> }
            { selectedTab === 'History' && <History /> }
        </View>
    )

}

export default OverviewPage
