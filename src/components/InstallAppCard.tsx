import Image from 'next/image';

const InstallAppCard = () => {
  return (
    <section className="bg-white px-4 py-8 dark:bg-slate-600 lg:rounded-xl">
      <div className="mx-auto sm:max-w-xs sm:text-center">
        <span className="mb-4 block text-base font-bold">
          Start Saving Today On The Fave App
        </span>
        <p className="text-sm">
          Deals, payment, cashback, and rewards—your lifestyle companion all in
          one app
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="">
            <Image
              src="/images/btn_appstore.png"
              alt="appstore"
              width={460}
              height={164}
            />
          </a>
          <a href="">
            <Image
              src="/images/btn_googleplay.png"
              alt="appstore"
              width={460}
              height={164}
            />
          </a>
          <a href="">
            <Image
              src="/images/btn_huawei.png"
              alt="appstore"
              width={460}
              height={164}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstallAppCard;
