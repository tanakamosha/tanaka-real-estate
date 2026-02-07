import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">プライバシーポリシー</h1>

                <div className="prose prose-gray max-w-none text-gray-700">
                    <p className="mb-6">
                        田中不動産（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                    </p>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">第1条（個人情報）</h2>
                        <p>
                            「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">第2条（個人情報の収集方法）</h2>
                        <p>
                            当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">第3条（個人情報を収集・利用する目的）</h2>
                        <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>当社サービスの提供・運営のため</li>
                            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                            <li>上記の利用目的に付随する目的</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">第4条（利用目的の変更）</h2>
                        <p>
                            当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
                            利用目的の変更を行った場合には、変更後の目的について、当社所定の方法によりユーザーに通知し、または本ウェブサイト上に公表するものとします。
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">第5条（個人情報の第三者提供）</h2>
                        <p>
                            当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">第6条（お問い合わせ窓口）</h2>
                        <p>
                            本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg mt-4">
                            <p>住所：東京都○○区○○ 1-2-3</p>
                            <p>社名：田中不動産</p>
                            <p>Eメールアドレス：hello@subarashiisato.co.jp</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
