import React from 'react'
import { View, Text} from 'react-native'
import PDFView from 'react-native-view-pdf';
import { styles } from './styles'
const Read = ({ }) => {
    const resources = {
        file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
        url: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        base64: 'JVBERi0xLjMKJcfs...',
    };
    const resourceType = 'url'
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Leia o seu <Text style={styles.secondTitlePart}>Livro:)</Text></Text>
            <PDFView
                fadeInDuration={100.0}
                style={{ width: '100%', height: '100%' }}
                resource={resources[resourceType]}
                resourceType={resourceType}
                onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
                onError={(error) => console.log('Cannot render PDF', error)}
            />
        </View>
    )
}
export default Read